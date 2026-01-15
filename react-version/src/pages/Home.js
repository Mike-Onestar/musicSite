import React from "react";
import { SpotifyLatestTrackAPI } from "../exports";

const Home = () => {
  return (
    <>
      <div className="container marketing">
        <div className="row featurette" style={{ marginTop: "10px" }}>
          <div className="col-md-7 order-md-2">
            <h2 className="featurette">latest release</h2>
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
