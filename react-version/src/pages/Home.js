import React from "react";
import { SocialLinks, SpotifyLatestTrackAPI } from "../exports";

const Home = () => {
  return (
    <>
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-5">
            <div className="position-relative">
              <SpotifyLatestTrackAPI />
            </div>
          </div>
          <div className="col-md-5">
            <h1 className="featurette">
              Latest release from the Sloje Factory
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
