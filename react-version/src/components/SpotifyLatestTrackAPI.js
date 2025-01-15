import React, { useState, useEffect } from "react";

const LatestTrackSpotifyAPI = () => {
  // State for managing our track data and loading/error states
  const [trackId, setTrackId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // These would typically come from environment variables
  const SPOTIFY_CLIENT_ID = "00c54a9609b24633a6952f9ae73e791a";
  const SPOTIFY_CLIENT_SECRET = "1dd1013267fa4be6b111b061a1d94246";
  const SPOTIFY_ARTIST_ID = "6vnoKId12sUVM7qPnvcnP8";

  // This function gets our access token from Spotify
  const getSpotifyToken = async () => {
    try {
      // We're using the client credentials flow here
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          // We encode our client ID and secret in base64 as required by Spotify
          Authorization: `Basic ${btoa(
            `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
          )}`,
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
        }),
      });

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error getting Spotify token:", error);
      throw error;
    }
  };

  // This effect runs when the component mounts
  useEffect(() => {
    const fetchLatestTrack = async () => {
      try {
        setIsLoading(true);
        // First, get our access token
        const token = await getSpotifyToken();

        // Then use it to fetch the artist's top tracks
        const response = await fetch(
          `https://api.spotify.com/v1/artists/${SPOTIFY_ARTIST_ID}/top-tracks?market=US`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        // If we got tracks back, use the first one (latest)
        if (data.tracks && data.tracks.length > 0) {
          setTrackId(data.tracks[0].id);
          setError(null);
        } else {
          throw new Error("No tracks found");
        }
      } catch (err) {
        setError("Failed to load track. Please try again later.");
        console.error("Error fetching latest track:", err);
      } finally {
        setIsLoading(false);
      }
    };

    // Call our function
    fetchLatestTrack();

    // Set up an interval to refresh the track every hour
    const interval = setInterval(fetchLatestTrack, 3600000); // 1 hour in milliseconds

    // Cleanup function to remove the interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs once when component mounts

  // Show loading spinner while we fetch the track
  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "352px" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Show error message if something went wrong
  if (error) {
    return (
      <div
        className="alert alert-danger d-flex align-items-center"
        role="alert">
        <div>{error}</div>
      </div>
    );
  }

  // Show the Spotify player once we have a track
  return (
    <div className="w-100" style={{ height: "352px" }}>
      {trackId && (
        <iframe
          className="w-100 h-100 rounded"
          src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      )}
    </div>
  );
};

export default LatestTrackSpotifyAPI;
