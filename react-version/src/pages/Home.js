import React, { useState, useEffect } from "react";
import { Music } from "lucide-react";

const Home = () => {
  // State for Spotify track
  const [isLoading, setIsLoading] = useState(true);

  // Social media section component
  const SocialLinks = () => (
    <div className="container my-4">
      <div className="social-container">
        <div className="d-flex gap-3 align-items-center">
          {/* Twitch Status */}
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
              <span className="live-dot me-2"></span>
              <span className="status-text">Offline</span>
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

  // Main content section
  const MainContent = () => (
    <div className="container marketing">
      {/* First Featurette */}
      <div className="row featurette">
        <div className="col-md-7">
          <h1 className="featurette-heading fw-normal lh-1">
            Latest release from the Sloje Factory
          </h1>
          <p className="lead mb-md-0">
            <b></b>
          </p>
        </div>
        <div className="col-md-5">
          <div className="d-flex justify-content-center">
            <iframe
              className="spotify-embed"
              style={{ borderRadius: "12px" }}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Spotify Embed"
            />
            {/* Loading state */}
            {isLoading && (
              <div id="spotify-loading" className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <hr className="featurette-divider mt-5" />

      {/* Second Featurette */}
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h1 className="featurette-heading fw-normal lh-1">
            Oh yeah, it's that good.
          </h1>
          <p className="lead mb-md-0">
            <b>Check out more of my music on Bandcamp</b>
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <div className="d-flex justify-content-center">
            <iframe
              src="https://bandcamp.com/EmbeddedPlayer/album=2607899670/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              style={{ border: 0, maxWidth: "100%", height: "470px" }}
              seamless
              title="Bandcamp Embed">
              <a href="https://sloje.bandcamp.com/album/jealous">
                jealous by sloje
              </a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SocialLinks />
      <MainContent />
    </>
  );
};

export default Home;
