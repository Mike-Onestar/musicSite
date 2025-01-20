import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-body-tertiary">
      <div className="container">
        <div className="footer-content">
          <div className="row gy-2">
            <div className="col-md-6">
              <h5 className="mb-1">About Sloje</h5>
              <p className="text-body-secondary mb-0">
                Creating music and content The Great ROTMG Days
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="mb-1">Connect</h5>
              <div className="d-flex gap-2">
                <Link className="text-body-secondary" to="/Contact">
                  Contact
                </Link>
                <span className="text-body-secondary">•</span>
                <a href="#" className="text-body-secondary">
                  Twitter
                </a>
                <span className="text-body-secondary">•</span>
                <a href="#" className="text-body-secondary">
                  Instagram
                </a>
                <span className="text-body-secondary">•</span>
                <a href="#" className="text-body-secondary">
                  Twitch
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="attributions text-center">
          <div>
            Icons:{" "}
            <a href="https://www.flaticon.com/free-icons/brands-and-logotypes">
              Brands and logotypes
            </a>{" "}
            by Freepik,
            <a href="https://www.flaticon.com/free-icons/instagram-logo">
              Instagram logo
            </a>{" "}
            by Laisa Islam Ani - Flaticon
          </div>
          <div>
            <a href="https://lucide.dev">Lucide Icons</a> - ISC License
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
