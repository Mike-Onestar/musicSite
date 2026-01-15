import React from "react";
import { SpotifyLatestTrackAPI, MusicPreview, ContactForm } from "../exports";

const Home = () => {
  return (
    <>
      <div className="container marketing">
        <div id="latest" className="row featurette" style={{ marginTop: "10px" }}>
          <div className="col-md-7 order-md-2">
            <h2>latest release</h2>
            <h1>SLOJE CORP.</h1>
          </div>
          <div className="col-md-5">
            <SpotifyLatestTrackAPI />
          </div>
        </div>

        <hr className="section-divider" />

        <div id="music">
          <MusicPreview />
        </div>

        <hr className="section-divider" />

        <div id="contact" className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-center mb-4">Direct Uplink</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
