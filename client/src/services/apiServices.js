import axios from "axios";

export const login = async (data) => {
  try {
    const res = await axios.post("http://localhost:4000/api/login", data);
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
};

export const register = async (data) => {
  try {
    const res = await axios.post("http://localhost:4000/api/register", data);
    return res.data;
  } catch (err) {
    return err.response.data.msg;
  }
};

export const varifyToken = async (token) => {
  try {
    const res = await axios.post("http://localhost:4000/api/verifyToken", {
      token,
    });
    return res;
  } catch (error) {
    console.error("Error While Verying");
    return error.response.data.msg;
  }
};

export const createPost = async ({title,story}) => {
  try {
    const res = await axios.post("http://localhost:4000/api/createPost", {
      title,
      story,
    }, {
      headers: {
        token: `${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error While Creating Post");
    return error.response.data.msg;
  }
}

export const getAllPost = async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/getAllPosts", {
      headers: {
        token: `${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error While Getting Post");
    return error.response.data.msg;
  }
}

export const getOnePost = async (id) => {
  try {
    const res = await axios.get(`http://localhost:4000/api/getOnePost/${id}` ,{
      headers: {
        token: `${localStorage.getItem("token")}`,
      },
    });
    console.log("res =",res.data)
    return res.data;
  } catch (error) {
    console.error("Error While Getting Post");
    return error.response.data.msg;
  }
}