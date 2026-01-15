import React from "react";
import { Link } from "react-router-dom";
import { SocialLinks } from "../exports";
import SlojeLogo from "./SlojeLogo";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary sticky-top">
      <div className="container-fluid d-flex align-items-center flex-wrap">
        {/* Brand - Always far left */}
        <Link className="navbar-brand order-1" to="/">
          <SlojeLogo height={30} />
          <span>CORP.</span>
        </Link>

        {/* Action Group (Socials + Toggler) - Far right on mobile, next to nav on desktop */}
        <div className="d-flex align-items-center ms-auto ms-sm-0 order-2 order-sm-3">
          <SocialLinks />
          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Navigation - Pushed to right on desktop, drops to next line on mobile */}
        <div className="collapse navbar-collapse order-3 order-sm-2 ms-sm-auto flex-grow-0" id="navbarSupportedContent">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/music">
                Music
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/contact">
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
