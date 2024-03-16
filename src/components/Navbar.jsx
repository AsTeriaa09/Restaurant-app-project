import React from "react";
import "../styles/Navbar.css"
import { TbBrandDrupal } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
          <TbBrandDrupal className="me-2 text-danger"/>
            DineOut
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
              <li className="nav-item nav-items mx-5">
                <Link className="nav-link text-dark" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item nav-items mx-5">
                <Link className="nav-link text-dark" to="/book-table">
                  Book a Table
                </Link>
              </li>
              <li className="nav-item nav-items mx-5">
                <Link className="nav-link text-dark" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
