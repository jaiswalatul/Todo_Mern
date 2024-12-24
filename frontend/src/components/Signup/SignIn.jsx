import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../Store_redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const dispatch = useDispatch();

  const history = useNavigate();

  const [input, setInput] = useState({
    email: "",

    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:1000/api/v1/signIn`, input)
      .then((resp) => {
        console.log(resp);
        if (resp.data.message === "Password is not correct") {
          toast.error("Password is not correct");
        } else {
          alert("User LoggedIn Succesfully")
           sessionStorage.setItem("id", resp.data.others._id);
           dispatch(authActions.login());
          
          history("/todo");
          
        }
      });
  };

  return (
    <div className="signup">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column  d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-3">
              <input
                className="p-2 my-3 outline"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={input.email}
                onChange={change}
              />

              <input
                className="p-2 my-3 outline"
                name="password"
                type="password"
                placeholder="Enter Your Password"
                value={input.password}
                onChange={change}
              />

              <button className="btn-signup" onClick={submit}>
                Sign In
              </button>
            </div>
          </div>
          <div className="col-lg-4 column col-left d-lg-flex justify-content-center align-items-center d-none">
            <h1 className="text-center heading">
              Sign <br />
              In
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
