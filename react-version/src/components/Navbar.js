import React from "react";
import { Link } from "react-router-dom";
import { SocialLinks } from "../exports";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/images/slojeEmote.webp" alt="brand icon" height="45" />
          Sloje
        </Link>

        <SocialLinks />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-0 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/music">
                Music
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
