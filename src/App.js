import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getUser } from "./actions/user";
import { getAdmin } from "./actions/admin";
import { getBlog } from "./actions/blog";

import Home from "./components/Home/Home";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import Blog from "./components/Blog/Blog";
import AdminPage from "./components/AdminPage/AdminPage";
import UpdateBlog from "./components/Blog/UpdateBlog";

export default function App() {
  const dispatch = useDispatch();
  dispatch(getUser());
  dispatch(getAdmin());
  dispatch(getBlog());

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Blog" exact element={<Blog />} />
          <Route path="/CreateBlog" exact element={<CreateBlog />} />
          <Route path="/UpdateBlog" exact element={<UpdateBlog />} />
          <Route path="/AdminPage" exact element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}
