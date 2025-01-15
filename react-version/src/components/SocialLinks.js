import React from "react";
import useTwitchStatus from "../hooks/useTwitchStatus";

const SocialLinks = () => {
  // Use our custom hook to get Twitch status
  const { isLive, error } = useTwitchStatus();

  return (
    <div className="container my-4">
      <div className="social-container">
        <div className="d-flex gap-3 align-items-center">
          {/* Twitch Status Button */}
          <button className="btn btn-purple rounded-pill d-flex align-items-center gap-2 px-4 py-2">
            <svg
              className="twitch-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2">
              <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
            </svg>
            <span className="d-flex align-items-center">
              <span
                className="live-dot me-2"
                style={{ display: isLive ? "inline-block" : "none" }}
              />
              <span className="status-text">{isLive ? "Live" : "Offline"}</span>
            </span>
          </button>

          {/* Social Buttons */}
          <a href="#" className="social-btn">
            <img src="/images/twitter.png" alt="Twitter" />
          </a>
          <a href="#" className="social-btn">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
