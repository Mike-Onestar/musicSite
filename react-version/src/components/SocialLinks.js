import React from "react";
import useTwitchStatus from "../hooks/useTwitchStatus";

// High-quality SVGs for "Sloje Corp" branding
const SocialIcons = {
  Twitch: ({ color }) => (
    <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" style={{ transition: 'fill 0.3s ease' }}>
      <path d="M11.571 4.714h1.714v5.143h-1.714V4.714zm4.715 0H18v5.143h-1.714V4.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0H6zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714v9.429z" />
    </svg>
  ),
  Spotify: () => (
    <svg viewBox="0 0 24 24" fill="#ff5e1a" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 17.302c-.217.356-.68.468-1.036.251-2.857-1.747-6.453-2.142-10.688-1.176-.407.093-.815-.16-.908-.567-.093-.406.161-.814.568-.908 4.636-1.06 8.597-.611 11.813 1.348.356.218.469.68.251 1.053zm1.474-3.26c-.274.444-.852.585-1.296.311-3.269-2.008-8.252-2.593-12.118-1.42-.497.151-1.026-.13-1.177-.626-.151-.498.13-1.027.627-1.178 4.417-1.34 9.905-.688 13.655 1.617.444.274.585.852.31 1.296zm.127-3.398c-3.922-2.329-10.373-2.544-14.144-1.398-.601.182-1.239-.164-1.421-.765-.182-.601.164-1.239.765-1.421 4.316-1.31 11.439-1.056 15.908 1.594.541.321.716 1.018.395 1.56-.321.542-1.019.717-1.56.395l-.043-.065z" />
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="#ff5e1a" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="#ff5e1a" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
    </svg>
  )
};

const SocialLinks = () => {
  const { isLive, error, isLoading } = useTwitchStatus();

  const getTwitchStatusText = () => {
    if (isLoading) return "Loading...";
    if (error) return "Offline";
    return isLive ? "Live" : "Offline";
  };

  return (
    <div className="d-flex gap-2 gap-sm-3 align-items-center">
      <a
        href={"https://www.twitch.tv/sloje_"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none">
        <button
          className="btn-twitch"
          title={error ? "Could not fetch stream status" : `Twitch: ${getTwitchStatusText()}`}
          disabled={isLoading}>
          {isLive && <div className="live-flare" />}
          <div className="twitch-icon-wrapper">
            <SocialIcons.Twitch color={isLive ? "#e91916" : "#ff5e1a"} />
          </div>
        </button>
      </a>

      <a
        href={process.env.REACT_APP_SPOTIFY_URL || "https://open.spotify.com/artist/0F63WlT3y4yYn3kR1XyP7v"}
        className="social-btn"
        target="_blank"
        rel="noopener noreferrer">
        <div className="social-icon-svg-wrapper">
          <SocialIcons.Spotify />
        </div>
      </a>
      <a
        href={process.env.REACT_APP_TWITTER_URL || "https://x.com/sloje_"}
        className="social-btn"
        target="_blank"
        rel="noopener noreferrer">
        <div className="social-icon-svg-wrapper">
          <SocialIcons.X />
        </div>
      </a>
      <a
        href={process.env.REACT_APP_INSTAGRAM_URL || "https://www.instagram.com/slojemusic/"}
        className="social-btn"
        target="_blank"
        rel="noopener noreferrer">
        <div className="social-icon-svg-wrapper">
          <SocialIcons.Instagram />
        </div>
      </a>
    </div>
  );
};

export default SocialLinks;
