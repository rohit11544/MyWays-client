import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getBlog, updateBlog } from "../../actions/blog";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Content from "./Content";

export default function Blog() {
  const location = useLocation();
  let blog = [];
  let blogs = useSelector((state) => state.blog);

  if (blogs.length !== 0) {
    blog = blogs.filter((b) => b._id === location.search.slice(1))[0];
  }
  // like
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const likeHandel = () => {
    dispatch(updateBlog(blog._id, { ...blog, likes: blog.likes + 1 })).then(
      () => {
        setLike(true);
        dispatch(getBlog());
        console.log("liked");
      }
    );
  };
  const unlikeHandel = () => {
    dispatch(updateBlog(blog._id, { ...blog, likes: blog.likes - 1 })).then(
      () => {
        setLike(false);
        dispatch(getBlog());
        console.log("unliked");
      }
    );
  };

  return (
    <div>
      <Navbar />
      <br />
      <Content
        blog={blog}
        likeHandel={likeHandel}
        unlikeHandel={unlikeHandel}
        like={like}
      />
    </div>
  );
}
