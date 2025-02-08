import React from "react";
import { SocialLinks, SpotifyLatestTrackAPI } from "../exports";

const Home = () => {
  return (
    <>
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h1 className="featurette-heading fw-normal lh-1">
              Latest release from the Sloje Factory
            </h1>
          </div>
          <div className="col-md-5">
            <div className="position-relative">
              <SpotifyLatestTrackAPI />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
