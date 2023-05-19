import "./sb-admin-2.min.css";

import Input from "../component/Input";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login1 = (props) => {
  const [username,usernameupdate]=useState('');
  const [password,passwordupdate]=useState('');
  const Navigate=useNavigate();


    
  const ProceedLogin = async () => {

    const result=await axios.get("http://localhost:8000/users");
    
    if(result.data.username ===username && result.data.password===password){
      Navigate('/homeadmin');
    }
  }
  const handleUsernameChange = (event) => {
    usernameupdate(event.target.value);
  };
  const handlePasswordChange = (event) => {
    passwordupdate(event.target.value);
  };



  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  //con cho chuot vao input
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="container">
      {/* Outer Row */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Sign In</h1>
                    </div>
                    <form className="user" onSubmit={ProceedLogin}>
                      <Input 
                      value={username}
                      onChange={handleUsernameChange}
                        inputRef={usernameRef}
                        placeholder="Enter your username"
                        autoComplete="off"
                        label="Username"
                        id="txtUsername"
                        maxLength={20}
                        lastRow
                      />
                      <Input
                       value={password}
                       onChange={handlePasswordChange}
                        inputRef={passwordRef}
                        placeholder="Password"
                        label="Password"
                        id="txtPassword"
                        type="password"
                        lastRow
                      />
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        
                        className="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </button>
                      <hr />
                      <a
                        href="index.html"
                        className="btn btn-google btn-user btn-block"
                      >
                        <i className="fab fa-google fa-fw" /> Login with Google
                      </a>
                      <a
                        href="index.html"
                        className="btn btn-facebook btn-user btn-block"
                      >
                        <i className="fab fa-facebook-f fa-fw" /> Login with
                        Facebook
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="register.html">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login1;
