// src/layouts/Layout.js
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="background-wrapper">
      <div className="paper-bg">
        <div className="scaffold-bg">
          <div className="content-container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
