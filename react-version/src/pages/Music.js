import React from "react";
import { SpotifyAlbumAPI } from "../exports";

const Music = () => {
  const FEATURED_ALBUM_ID = "4xiAKYWq69M2HdvLLtXFE7";

  return (
    <>
      {/* Main content container */}
      <div className="container marketing">
        {/* Spotify Section */}
        <div className="row featurette">
          <div className="col-md-7">
            <h1 className="featurette-heading fw-normal lh-1">
              Featured Album on Spotify
            </h1>
            <p className="lead">
              Check out this latest release - a perfect blend of melody and
              rhythm.
            </p>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-center">
              <SpotifyAlbumAPI albumId={FEATURED_ALBUM_ID} />
            </div>
          </div>
        </div>

        <hr className="featurette-divider mt-5" />

        {/* Bandcamp Section */}
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h1 className="featurette-heading fw-normal lh-1">
              Latest Album on Bandcamp
            </h1>
            <p className="lead">
              Download and stream the full album with bonus tracks.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <div className="d-flex justify-content-center">
              <iframe
                style={{
                  border: 0,
                  width: "min(350px, 100%)",
                  height: "470px",
                  maxWidth: "100%",
                }}
                src="https://bandcamp.com/EmbeddedPlayer/album=2607899670/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                seamless
                title="Bandcamp Album Player">
                <a href="https://sloje.bandcamp.com/album/jealous">
                  jealous by sloje
                </a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
