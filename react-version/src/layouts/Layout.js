import React from "react";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="background-wrapper min-vh-100">
      <div className="paper-bg">
        <div className="scaffold-bg">
          <div className="content-container d-flex flex-column min-vh-100">
            {/* Content */}
            <div className="flex-grow-1">{children}</div>
            {/* Footer will now stay at bottom */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
