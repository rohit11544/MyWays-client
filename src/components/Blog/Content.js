import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBlog } from "../../actions/blog";
import "./style.css";
import Footer from "../Footer/Footer";

export default function Content({ blog, likeHandel, unlikeHandel, like }) {
  let user = useSelector((state) => state.userDerails);
  const dispatch = useDispatch();
  const [com, setCom] = useState({ writer: "", comment: "" });
  const [check, setCheck] = useState(false);
  const commentHandler = () => {
    if (com.writer === "") {
      alert("Login to comment");
      setCom({ writer: "", comment: "" });
    } else {
      blog.comments.push(com);
      setCheck(!check);
      setCom({ writer: "", comment: "" });
    }
  };
  return (
    <>
      <div>
        <h2 className="heading-btn">MyWays Blogs</h2>
        <br />
        <center>
          <h1>
            <b>{blog.title}</b>
          </h1>
          <br />
          <div className="size-style" width={1000}>
            <img
              src={blog.image}
              className="card-img-top"
              width={100}
              height={500}
              alt="..."
            />
            <br /> <br />
            <nav className="navbar navbar-light bg-light">
              <div>
                <a className="navbar-brand" href="#">
                  <Link className="navbar-brand" to="/">
                    <img
                      src="https://myways.ai/static/media/newFavicon.a6e8cb85.png"
                      alt=""
                      width={30}
                      height={30}
                      className="d-inline-block align-text-top float"
                    />
                    <div className="head-style">MyWays</div>
                  </Link>
                </a>
                <div className="date">{blog.date}</div>
                <div className="circle">
                  <i class="fas fa-circle" style={{ fontSize: "8px" }}></i>
                </div>
                <div className="read">
                  {Math.ceil(blog.content.length / 1000)} Min Read
                </div>
                <div className="share-btn">
                  <i
                    class="fas fa-share date-btn share"
                    style={{ fontSize: "25px" }}
                  >
                    {" "}
                    Share
                  </i>{" "}
                </div>
              </div>
            </nav>
            <br />
            <div>
              <p style={{ textAlign: "justify" }}>{blog.content}</p>
              {user.verified === "YES" && (
                <div>
                  <Link
                    to={{
                      pathname: `/UpdateBlog?${blog._id}`,
                    }}
                  >
                    <button type="button" className="btn btn-primary">
                      Update
                    </button>{" "}
                  </Link>
                  <Link to="/CreateBlog">
                    <button type="button" className="btn btn-success">
                      Create
                    </button>{" "}
                  </Link>
                </div>
              )}
            </div>
            <div className="float">
              {like === false ? (
                <>
                  <i
                    className="far fa-thumbs-up"
                    style={{ fontSize: "20px" }}
                    onClick={() => likeHandel()}
                  ></i>{" "}
                </>
              ) : (
                <>
                  <i
                    class="fas fa-thumbs-up"
                    onClick={() => unlikeHandel()}
                    style={{ fontSize: "20px" }}
                  ></i>
                  {"   "}
                </>
              )}
              {blog.likes} Like
            </div>
            <div className="comment">
              <i class="far fa-comments" style={{ fontSize: "20px" }}></i>
              {blog.comments.length}
              comment
            </div>
            <br />
            <br />
            <h3 className="float">Comments</h3>
            <br />
            <br />
            <hr />
            <div>
              {blog.comments.map((c) => (
                <div>
                  <i
                    class="fas fa-user-circle float"
                    style={{ fontSize: "40px" }}
                  ></i>
                  <div>
                    <h6 className="float">{c.writer}</h6>
                    <br />
                    <p
                      className="float writer"
                      style={{ textAlign: "justify" }}
                    >
                      {c.comment}
                    </p>
                    <br />
                    <br />
                  </div>
                  <br />
                </div>
              ))}
            </div>
            <div className="mb-3">
              <form>
                <textarea
                  className="form-control"
                  placeholder="Write a Comment Here..."
                  onChange={(e) => {
                    setCom({
                      comment: e.target.value,
                      writer: user.fullName,
                    });
                    console.log(com.comment);
                  }}
                  value={com.comment}
                  rows={3}
                />
                <br />
                <button
                  type="button"
                  class="btn btn-secondary float"
                  onClick={() => commentHandler()}
                >
                  Add Comment
                </button>
                <br />
                <br />
              </form>
            </div>
          </div>
        </center>
      </div>
      <Footer />
    </>
  );
}
