import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { createBlog, getBlog, updateBlog } from "../../actions/blog";
import Home from "../Home/Home";
import "./style.css";
import Update from "./Update";

export default function UpdateBlog() {
  const location = useLocation();
  let blog = [];
  let blogs = useSelector((state) => state.blog);

  if (blogs.length !== 0) {
    blog = blogs.filter((b) => b._id === location.search.slice(1))[0];
  }
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const submitHandler = (id, data) => {
    dispatch(updateBlog(id, data)).then(() => {
      dispatch(getBlog());
      setCheck(true);
    });
  };
  return (
    <>
      {check === false ? (
        <>
          {" "}
          <Update
            blog={blog}
            submitHandler={submitHandler}
            setCheck={setCheck}
          />
        </>
      ) : (
        <>
          <Home />
        </>
      )}
    </>
  );
}
