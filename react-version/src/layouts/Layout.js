import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="background-wrapper min-vh-100">
      <div className="video-background">
        <video autoPlay loop muted className="video">
          <source src="/images/static_bgloop.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="content-container">{children}</div>
    </div>
  );
};

export default Layout;
