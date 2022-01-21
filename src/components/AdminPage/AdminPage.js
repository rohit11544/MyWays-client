import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminMain from "./AdminMain";
import "./style.css";

export default function AdminPage() {
  const [entryDetails, setEntryDetails] = useState({ email: "", passWord: "" });
  const [check, setCheck] = useState(false);
  const admins = useSelector((store) => store.admin);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      admins.filter(
        (a) =>
          a.email === entryDetails.email && a.passWord === entryDetails.passWord
      ).length === 1
    ) {
      setCheck(true);
    }
  };
  const [check2, setCheck2] = useState(false);
  const users = useSelector((store) => store.user);
  return (
    <div>
      {check === false ? (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h2 className="text-center text-dark mt-5">Admin Login Form</h2>

                <div className="card my-5">
                  <form className="card-body cardbody-color p-lg-5">
                    <div className="text-center">
                      <img
                        src="https://myways.ai/static/media/newFavicon.a6e8cb85.png"
                        className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                        width="200px"
                        alt="profile"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={(e) => {
                          setEntryDetails({
                            ...entryDetails,
                            email: e.target.value,
                          });
                        }}
                        value={entryDetails.email}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        required
                        onChange={(e) => {
                          setEntryDetails({
                            ...entryDetails,
                            passWord: e.target.value,
                          });
                        }}
                        value={entryDetails.passWord}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-color px-5 mb-5 w-100"
                        onClick={(e) => submitHandler(e)}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <AdminMain check={check2} setCheck={setCheck2} users={users} />
        </>
      )}
    </div>
  );
}
