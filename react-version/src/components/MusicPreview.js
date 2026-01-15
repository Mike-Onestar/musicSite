import React from "react";
import { SpotifyAlbumAPI } from "../exports";

const MusicPreview = () => {
  const HIGHLIGHT_ALBUM_ID = "4xiAKYWq69M2HdvLLtXFE7"; // Consistent with Music.js

  return (
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Music Highlights</h2>
        <p className="lead">
          Dive into the latest sonic experiments. A collection of moods, 
          synths, and rhythm.
        </p>
        <div className="mt-4 btn-terminal-container">
            <a href="/music" className="btn btn-terminal">EXPLORE_ALL_TRACKS</a>
        </div>
      </div>
      <div className="col-md-5">
        <SpotifyAlbumAPI albumId={HIGHLIGHT_ALBUM_ID} />
      </div>
    </div>
  );
};

export default MusicPreview;
