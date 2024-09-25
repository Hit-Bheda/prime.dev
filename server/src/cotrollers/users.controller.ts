import User from "../models/users.model.ts";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.ts";
import tryCatch from "../utils/tryCatch.util.ts";
import Post from "../models/post.model.ts";
import { Request, Response } from "express";

export const register = tryCatch(async (req:Request, res:Response) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ $or: [{ username }, { email }] });
  if (user) throw new Error("Username or Email already exists");
  const newUser = new User({ username, email, password });
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(password, salt);
  await newUser.save();
  const token = jwt.sign({ id: newUser.id }, config.secret, {
    expiresIn: "100h",
  });
  res.status(200).json({ token, status: "ok" });
});

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email) throw new Error("Please Provide Email Address");
  if (!password) throw new Error("Please Provide Password");
  const data = await User.findOne({ email });
  if (!data) throw new Error("user not found");
  const ismatch = await bcrypt.compare(password, data.password);
  if (!ismatch) throw new Error("invalid password");
  const token = jwt.sign({ id: data.id }, config.secret );
  res.status(200).json({ token, status: "ok" });
};

export const verifyToken = tryCatch(async (req: Request, res: Response) => {
  const token = req.headers.token;
  const verify = jwt.verify(token, config.secret);
  if (!verify) throw new Error("invalid token!");
  const data = await User.findById(verify.id);
  if (!data) throw new Error("user not found");
  res.status(200).json({ status: "ok" });
});

export const createPost = async ( req: Request, res: Response) => {
  const { title, story } = req.body;
  if (!title) throw new Error("Please Provide Title");
  if (!story) throw new Error("Please Provide Story");
  const user = await User.findById(req.user.id);
  if (!user) throw new Error("User not found");
  const newPost = { title, story, author: req.user.id };
  const post = await new Post(newPost).save();
  res.status(200).json(post);
}

export const getAllPosts = async ( _req: Request, res: Response ) => {
  const posts = await Post.find().populate("author", "username");
  if(!posts) throw new Error("No Posts Found");
  res.status(200).json(posts);
}

export const getOnePost = async ( req: Request, res: Response ) => {
  const post = await Post.findById(req.params.id).populate("author", "username");
  if(!post) throw new Error("Post Not Found");
  res.status(200).json(post);
}

export const updatePost = async ( req: Request, res:Response ) => {
  const { title, story } = req.body
  const post = await Post.findByIdAndUpdate(req.params.id, { title, story } );
  if(!post) throw new Error("Post Not Found");
  res.status(200).json(post);
}

export const deletePost = async ( req: Request, res:Response ) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if(!post) throw new Error("Post Not Found");
  res.status(200).json({ msg: "Post deleted successfully" });
}

export const getProfile = async ( req: Request, res:Response ) => {
  const user = await User.findById(req.user.id);
  if(!user) throw new Error("User Not Found");
  res.status(200).json(user);
}

export const updateProfile = async ( req: Request, res:Response ) => {
  const { name, email } = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, { name, email } );
  if(!user) throw new Error("User Not Found");
  res.status(200).json(user);
}

// export const updatePassword = 