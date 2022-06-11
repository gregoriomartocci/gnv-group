import axios from "axios";
import React from "react";

interface IFetch {
  path: string;
  payload: any;
}

const Post = async ({ path, payload }: IFetch) => {
  if (typeof window) {
    axios.defaults.baseURL =
      process.env.NEXT_PUBLIC_API || "http://localhost:8000/api";
  } else {
    axios.defaults.baseURL = process.env.API || "http://localhost:8000/api";
  }
  const { data } = await axios.post(path, payload);
  return data;
};

export default Post;
