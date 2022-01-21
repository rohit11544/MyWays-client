import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";

import { createBlog } from "../../actions/blog";

import "./style.css";

export default function CreateBlog() {
  const [blog, setBlog] = useState({
    title: "",
    image: "",
    owner: "",
    date: "",
    content: "",
    likes: 0,
    comments: [],
  });
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userDerails);
  console.log(user);
  const submitHandler = (e) => {
    e.preventDefault();
    if (user.fullName !== "") {
      dispatch(createBlog(blog));
      alert("Blog created!");
      setBlog({ title: "", image: "", owner: "", date: "", content: "" });
    } else {
      alert("Login to create blog");
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <h4 className="h4-style">
        <span>Blog Editer</span>
      </h4>
      <div className="button-style">
        <button
          type="button"
          className="button-color btn"
          onClick={(e) => {
            submitHandler(e);
          }}
        >
          Publish
        </button>
      </div>
      <br />
      <div className="container">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Title Here"
            onChange={(e) => {
              setBlog({
                ...blog,
                title: e.target.value,
                owner: user.fullName,
                date: "20/01/2022",
              });
            }}
            value={blog.title}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Image Link"
            onChange={(e) => {
              setBlog({ ...blog, image: e.target.value });
            }}
            value={blog.image}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Add Content Here..."
            onChange={(e) => {
              setBlog({ ...blog, content: e.target.value });
            }}
            value={blog.content}
            rows={15}
            defaultValue={""}
          />
        </div>
      </div>
    </>
  );
}
