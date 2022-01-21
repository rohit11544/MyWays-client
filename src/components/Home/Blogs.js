import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function Blogs({ blogs }) {
  return (
    <>
      {blogs.length === 0 ? (
        <>Loading...</>
      ) : (
        <>
          <section id="gallery">
            <div className="container">
              <div className="row">
                {blogs.map((blog) => (
                  <>
                    <div className="col-lg-4 mb-4">
                      <div className="card" style={{ width: "22rem" }}>
                        <img
                          src={blog.image}
                          className="card-img-top"
                          width={400}
                          height={250}
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{blog.title}</h5>
                          Published - {blog.date}
                          <p className="card-text">
                            <b>{blog.content.slice(0, 70)}...</b>
                          </p>
                        </div>
                        <hr aria-hidden />
                        <div className="card-body">
                          <button disable className="btn btn-light">
                            {Math.ceil(blog.content.length / 1000)} Min Read
                          </button>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <Link
                            to={{
                              pathname: `/Blog?${blog._id}`,
                            }}
                          >
                            <button disable className="btn btn-light btn-read">
                              Read More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
