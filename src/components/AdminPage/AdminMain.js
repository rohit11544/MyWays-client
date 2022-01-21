import React from "react";
import { useDispatch } from "react-redux";
import { getUser, updateUser } from "../../actions/user";
import "./style.css";
export default function AdminMain({ setCheck, users }) {
  const dispatch = useDispatch();

  return (
    <div>
      <center>
        <h1>Admin Page</h1>
      </center>

      <div>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>Users</b>
                    </h2>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Verified</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <>
                      <tr>
                        <td>{user._id}</td>
                        <td>{user.fullName}</td>
                        <td>{user.email}</td>
                        <td>{user.phNumber}</td>
                        <td>{user.verified}</td>

                        <td>
                          <i
                            class="fas fa-check tick"
                            onClick={() => {
                              dispatch(
                                updateUser(user._id, {
                                  ...user,
                                  verified: "YES",
                                })
                              ).then(() => {
                                dispatch(getUser());
                              });

                              setCheck(true);
                            }}
                          ></i>

                          <i
                            class="fas fa-times wronge"
                            onClick={() => {
                              dispatch(
                                updateUser(user._id, {
                                  ...user,
                                  verified: "NO",
                                })
                              ).then(() => {
                                dispatch(getUser());
                              });

                              dispatch(getUser());
                              setCheck(false);
                            }}
                          ></i>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
