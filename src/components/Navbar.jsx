import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black py-3 custom-navbar">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand fw-bold text-success" to="/">
          Prince Gupta
        </NavLink>

        {/* Toggle button */}
        <button
          className="navbar-toggler border-success ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item mx-3">
              <NavLink className="nav-link nav-animate" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item mx-3">
              <NavLink className="nav-link nav-animate" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item mx-3">
              <NavLink className="nav-link nav-animate" to="/projects">
                Projects
              </NavLink>
            </li>

            <li className="nav-item mx-3">
              <NavLink className="nav-link nav-animate" to="/contact">
                Contact
              </NavLink>
            </li>

            <li className="nav-item mx-3">
              <NavLink className="nav-link nav-animate" to="/education">
                Education
              </NavLink>
            </li>

            {/* Resume Button */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
             <a
                 href="/Resume.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn btn-outline-success" >
                 Resume
                </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;