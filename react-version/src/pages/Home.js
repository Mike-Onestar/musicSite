import React from "react";
import { SocialLinks, SpotifyLatestTrackAPI } from "../exports";

const Home = () => {
  return (
    <>
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-4 order-md-2">
            <h1 className="featurette">SLOJE CORP.</h1>
          </div>
          <div className="col-md-5">
            <SpotifyLatestTrackAPI />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
