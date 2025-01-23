import React from "react";
import useTwitchStatus from "../hooks/useTwitchStatus";

const SocialLinks = () => {
  const { isLive, error, isLoading } = useTwitchStatus();

  const getTwitchStatusText = () => {
    if (isLoading) return "Loading...";
    if (error) return "Unavailable";
    return isLive ? "Live" : "Offline";
  };

  const getTwitchButtonClasses = () => {
    const baseClasses =
      "btn btn-purple rounded-pill d-flex align-items-center gap-2 px-4 py-2";
    if (error) return `${baseClasses} opacity-75`;
    if (isLoading) return `${baseClasses} disabled`;
    return baseClasses;
  };

  return (
    <div className="container my-4">
      <div className="social-container">
        <div className="d-flex gap-3 align-items-center">
          <a
            href={"https://www.twitch.tv/sloje_"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none">
            <button
              className={getTwitchButtonClasses()}
              title={error ? "Could not fetch stream status" : undefined}
              disabled={isLoading}>
              <svg
                className="twitch-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
              </svg>
              <span className="d-flex align-items-center">
                {!error && !isLoading && (
                  <span
                    className="live-dot me-2"
                    style={{ display: isLive ? "inline-block" : "none" }}
                  />
                )}
                <span className="status-text">{getTwitchStatusText()}</span>
              </span>
            </button>
          </a>

          <a
            href={process.env.REACT_APP_TWITTER_URL || "#"}
            className="social-btn"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/images/twitter.png" alt="Twitter" />
          </a>
          <a
            href={process.env.REACT_APP_INSTAGRAM_URL || "#"}
            className="social-btn"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
