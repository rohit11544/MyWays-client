import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../../actions/blog";
import Navbar from "../Navbar/Navbar";

export default function Update({ blog, submitHandler, setCheck }) {
  const dispatch = useDispatch();
  const [updateB, setUpdateB] = useState(blog);
  return (
    <div>
      <Navbar />
      <br />
      <h4 className="h4-style">
        <span>Blog Editer</span>
      </h4>
      <div className="button-style">
        <button
          type="button"
          className="button-color btn"
          onClick={() => {
            submitHandler(updateB._id, updateB);
          }}
        >
          Update
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
              setUpdateB({
                ...updateB,
                title: e.target.value,
              });
            }}
            value={updateB.title}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Image Link"
            onChange={(e) => {
              setUpdateB({ ...updateB, image: e.target.value });
            }}
            value={updateB.image}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Add Content Here..."
            onChange={(e) => {
              setUpdateB({ ...updateB, content: e.target.value });
            }}
            value={updateB.content}
            rows={15}
            defaultValue={""}
          />
        </div>
      </div>
      <center>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            dispatch(deleteBlog(updateB._id)).then(() => {
              setCheck(true);
            });
          }}
        >
          Delete
        </button>
      </center>
    </div>
  );
}
