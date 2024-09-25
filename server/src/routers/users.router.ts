import express from "express";
import userAuth from "../middlewares/userAuth.middleware.ts";
import {
  login,
  register,
  verifyToken,
  createPost,
  getAllPosts,
  getOnePost,
  getProfile,
  updatePost,
  deletePost
} from "../cotrollers/users.controller.ts";
import tryCatch from "../utils/tryCatch.util.ts";
import { Handler } from "../types/types.ts";

const userRouter = express.Router();

const publicRoutes = [
  {
    path: "/login",
    method: "post",
    handler: login
  },
  {
    path: "/register",
    method: "post",
    handler: register
  },
  {
    path: "/verifyToken",
    method: "post",
    handler: verifyToken
  }
]
const privateRoutes = [
  {
    path: "/createPost",
    method: "post",
    handler: createPost
  },
  {
    path: "/getAllPosts",
    method: "get",
    handler: getAllPosts
  },
  {
    path: "/getOnePost/:id",
    method: "get",
    handler: getOnePost
  },
  {
    path: "/getProfile",
    method: "get",
    handler: getProfile
  },
  {
    path: "/updatePost",
    method: "put",
    handler: updatePost
  },
  {
    path: "/deletePost",
    method: "delete",
    handler: deletePost
  }
]

publicRoutes.forEach(route => {
  const handler = route.handler as Handler;
  userRouter[route.method] (route.path,tryCatch(handler));
});

privateRoutes.forEach(route => {
  userRouter[route.method] (route.path, userAuth, tryCatch(route.handler));
});

export default userRouter;
