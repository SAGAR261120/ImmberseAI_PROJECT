import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="navbar navbar-expand-lg px-4">
      <div className="gradient-half-circle"></div>

      <Link className="navbar-brand text-white" to="/">
        ImmverseAI
      </Link>
      <button
        className="navbar-toggler gradient-bg"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto gap-5">
          <li className="nav-item">
            <Link
              className={`nav-link ${active === "Home" ? "active" : "text-white"}`}
              to="/"
              onClick={() => setActive("Home")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${active === "Company" ? "active" : "text-white"}`}
              // to="/company"
              onClick={() => setActive("Company")}
            >
              Company
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${active === "Features" ? "active" : "text-white"}`}
              // to="/features"
              onClick={() => setActive("Features")}
            >
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn gradient-bg mt-1 text-white px-3 sign-up-btn" to="/signup"       onClick={() => setActive("")}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
