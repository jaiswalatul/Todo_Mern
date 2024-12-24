import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { GiWhiteBook } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "./Store_redux";
import { useNavigate } from "react-router-dom";

const Navabar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const logout = () => {
    alert("Logout Successfully");
    dispatch(authActions.logout());
    sessionStorage.clear("id");
  };

  return (
    <nav className="navbar navbar-expand-lg   ">
      <div className="container">
        <Link className="navbar-brand text" to="/">
          <b>
            <GiWhiteBook />
            todo
          </b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                className="nav-link active mx-2 "
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="/about"
              >
                About us
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                className="nav-link active mx-2  "
                aria-current="page"
                to="/todo"
              >
                Todo
              </Link>
            </li>
            {!isLoggedIn && (
              <>
                <div className="d-flex my-lg-0 my-2 ">
                  <li className="nav-item">
                    <Link
                      className="nav-link active btn-nav mx-2 fonta  p-2"
                      aria-current="page"
                      to="/signUp"
                    >
                      Sign Up
                    </Link>
                  </li>
                </div>

                <div className="d-flex my-lg-0 my-2">
                  <li className="nav-item">
                    <Link
                      className="nav-link active btn-nav mx-2 fonta  p-2"
                      aria-current="page"
                      to="/signIn"
                    >
                      Sign In
                    </Link>
                  </li>
                </div>
              </>
            )}

            {isLoggedIn && (
              <div className="d-flex ">
                <li className="nav-item mx-2" onClick={logout}>
                  <Link
                    className="nav-link active btn-nav fonta p-2"
                    aria-current="page"
                    to="#"
                  >
                    Log Out
                  </Link>
                </li>
              </div>
            )}

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                <img
                  className="img-fluid user_png"
                  src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navabar;
