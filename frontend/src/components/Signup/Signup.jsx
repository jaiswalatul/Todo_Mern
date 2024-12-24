import React from "react";
import "./signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();

  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:1000/api/v1/register`, input)
      .then((resp) => {
        //console.log(resp);
        if (resp.data.message === "user already exist") {
          alert(resp.data.message);
        } else {
          alert(resp.data.message);
        }

        setInput({
          email: "",
          username: "",
          password: "",
        });
      });
    history("/signIn");
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column  d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-3">
              <input
                className="p-2 my-3 outline"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                onChange={change}
                value={input.email}
              />

              <input
                className="p-2 my-3 outline"
                name="username"
                type="username"
                placeholder="Enter Your Username"
                onChange={change}
                value={input.username}
              />

              <input
                className="p-2 my-3 outline"
                name="password"
                type="password"
                placeholder="Enter Your Password"
                onChange={change}
                value={input.password}
              />

              <button className=" btn-signup" onClick={submit}>
                Sign Up
              </button>
            </div>
          </div>
          <div className="col-lg-4 column col-left d-lg-flex justify-content-center align-items-center d-none">
            <h1 className="text-center heading">
              Sign <br />
              Up
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
