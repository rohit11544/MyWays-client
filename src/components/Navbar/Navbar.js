import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { createUser } from "../../actions/user";
import { loginUser, logoutUser } from "../../actions/actions";

import "./style.css";

export default function Navbar() {
  // Login
  const [loginEntry, setLoginEntry] = useState({
    email: "",
    passWord: "",
  });

  const [conformpass, setConformpass] = useState("");
  const [check, setCheck] = useState(true);

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phNumber: "",
    passWord: "",
    verified: "NO",
  });

  const dispatch = useDispatch();
  const users = useSelector((store) => store.user);
  const loggedUser = useSelector((store) => store.userDerails);
  // console.log("logged user : ", loggedUser);
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid justify-content-start">
          <Link className="navbar-brand" to="/">
            <img
              src="https://myways.ai/static/media/newFavicon.a6e8cb85.png"
              alt=""
              width={30}
              height={30}
              className="d-inline-block align-text-top"
            />
            MyWays
          </Link>
          {loggedUser.fullName === "" ? (
            <>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary login-btn"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
                data-bs-whatever="@mdo"
              >
                <b>Login</b>
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-sm register-btn"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
                data-bs-whatever="@mdo"
              >
                <b>Register</b>
              </button>
            </>
          ) : (
            <>
              <button type="button" className="btn btn-success profile-btn">
                {loggedUser.fullName}
              </button>
              <button
                type="button"
                className="btn btn-danger logout-btn"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(logoutUser());
                  setCheck(!check);
                }}
              >
                Logout
              </button>
            </>
          )}

          {/* ------------------------------LOGIN-------------------------------- */}
          <div
            className="modal fade"
            id="loginModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content" width={50}>
                <div className="modal-header">
                  <center>Login</center>

                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        id="recipient-name"
                        onChange={(e) => {
                          setLoginEntry({
                            ...loginEntry,
                            email: e.target.value,
                          });
                        }}
                        value={loginEntry.email}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="recipient-name"
                        onChange={(e) => {
                          setLoginEntry({
                            ...loginEntry,
                            passWord: e.target.value,
                          });
                        }}
                        value={loginEntry.passWord}
                      />
                    </div>
                    <center>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={(e) => {
                          e.preventDefault();
                          if (
                            users.filter(
                              (u) =>
                                u.passWord === loginEntry.passWord &&
                                u.email === loginEntry.email
                            ).length === 1
                          ) {
                            dispatch(
                              loginUser(
                                users.filter(
                                  (u) =>
                                    u.passWord === loginEntry.passWord &&
                                    u.email === loginEntry.email
                                )[0]
                              )
                            );
                            setLoginEntry({
                              email: "",
                              passWord: "",
                            });
                          } else {
                            alert("incorrect email or password");
                          }
                        }}
                      >
                        Login
                      </button>
                      <div
                        style={{
                          paddingTop: "15px",
                          fontSize: "85%",
                        }}
                      >
                        Don't have an account yet!
                        <a
                          href="#"
                          // onClick="$('#loginbox').hide(); $('#signupbox').show()"
                        >
                          Register
                        </a>
                      </div>
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------REGISTER----------------------------------- */}
          <div
            className="modal fade"
            id="registerModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content" width={50}>
                <div className="modal-header">
                  <center>
                    <h5 className="modal-title" id="exampleModalLabel">
                      Register
                    </h5>
                  </center>

                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-outline mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={(e) => {
                          setUser({ ...user, fullName: e.target.value });
                        }}
                        value={user.fullName}
                        required
                      />
                    </div>
                    <div className="form-outline mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        id="recipient-name"
                        required
                        onChange={(e) => {
                          setUser({ ...user, email: e.target.value });
                        }}
                        value={user.email}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        id="recipient-name"
                        required
                        onChange={(e) => {
                          setUser({ ...user, phNumber: e.target.value });
                        }}
                        value={user.phNumber}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="passward"
                        className="form-control"
                        placeholder="Passward"
                        id="recipient-name"
                        required
                        onChange={(e) => {
                          setUser({ ...user, passWord: e.target.value });
                        }}
                        value={user.passWord}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Conform Password"
                        onChange={(e) => {
                          setConformpass(e.target.value);
                        }}
                        value={conformpass}
                        required
                        id="recipient-name"
                      />
                    </div>
                    <center>
                      <button
                        type="submit"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        required
                        onClick={(e) => {
                          e.preventDefault();
                          if (user.passWord === conformpass) {
                            dispatch(createUser(user))
                              .then(() => {
                                alert("Registered Successfully!");
                                setUser({
                                  fullName: "",
                                  email: "",
                                  phNumber: "",
                                  passWord: "",
                                  verified: "NO",
                                });
                              })
                              .catch((error) => {
                                alert("error : ", error.message);
                              });
                          } else {
                            alert("passwords didn't match");
                          }
                        }}
                      >
                        Register as Candidate
                      </button>
                      <div
                        style={{
                          paddingTop: "15px",
                          fontSize: "85%",
                        }}
                      >
                        Already have an account?
                        <a
                          href="#"
                          // onclick="$('#loginbox').hide(); $('#signupbox').show()"
                        >
                          Login
                        </a>
                      </div>
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
