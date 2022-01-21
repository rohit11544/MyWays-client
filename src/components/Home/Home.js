import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Blogs from "./Blogs";
import "./style.css";

export default function Home() {
  const blog = useSelector((store) => store.blog);
  // console.log(blog);
  return (
    <>
      <Navbar />
      <br />
      <h2 className="heading-btn">MyWays Blogs</h2>
      <br />
      <Blogs blogs={blog} />
    </>
  );
}
