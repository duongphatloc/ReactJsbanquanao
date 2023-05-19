import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:8000/users");
    setUsers(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    loadUser();
    alert("deleted sucess");
  };
  return (
    <div className="" id="wrapper">
      <Sidebar />
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <Header />
          <div className="container mt-4">
            <div className="card border-primary bt-5">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h3 className="card-title">
                      Check out <small className="text-muted">list</small>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary table-hover table-striped">
                    <thead>
                      <tr className="table-primary border-primary">
                        <th style={{ width: 50 }}>ID</th>
                        <th>User Name</th>

                        <th>phone</th>
                        <th>email</th>
                        <th>address</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>

                          <td>{user.phone}</td>
                          <td>{user.email}</td>
                          <td>{user.address}</td>
                          <td>
                            <Link href="#">
                              <i className="bi-pencil-square text-primary" />
                            </Link>
                            <Link href="#" onClick={() => deleteUser(user.id)}>
                              <i className="bi-trash text-danger" />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
