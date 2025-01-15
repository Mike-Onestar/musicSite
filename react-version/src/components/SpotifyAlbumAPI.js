import React from "react";

const SpotifyAlbumAPI = ({ albumId }) => {
  // Add some console.log statements to help us debug
  console.log("Album ID received:", albumId);

  if (typeof albumId !== "string" || albumId.trim() === "") {
    return (
      <div className="alert alert-warning">Please provide a valid album ID</div>
    );
  }

  return (
    <div className="w-100" style={{ height: "380px" }}>
      <iframe
        className="w-100 h-100 rounded"
        src={`https://open.spotify.com/embed/album/${albumId}?utm_source=generator`}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};

export default SpotifyAlbumAPI;
