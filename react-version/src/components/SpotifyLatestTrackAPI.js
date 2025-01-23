import React, { useState, useEffect, useCallback } from "react";

const LatestTrackSpotifyAPI = () => {
  const [trackId, setTrackId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const SPOTIFY_ARTIST_ID = process.env.REACT_APP_SPOTIFY_ARTIST_ID;

  // Memoized function to get the Spotify token
  const getSpotifyToken = useCallback(async () => {
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
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
  }, [SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET]);

  useEffect(() => {
    let isSubscribed = true; // Prevent state updates after unmount
    let intervalId;

    const fetchLatestTrack = async () => {
      try {
        setIsLoading(true);
        const token = await getSpotifyToken();

        const response = await fetch(
          `https://api.spotify.com/v1/artists/${SPOTIFY_ARTIST_ID}/top-tracks?market=US`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (isSubscribed) {
          if (data.tracks && data.tracks.length > 0) {
            setTrackId(data.tracks[0].id);
            setError(null);
          } else {
            throw new Error("No tracks found");
          }
        }
      } catch (err) {
        if (isSubscribed) {
          setError("Failed to load track. Please try again later.");
          console.error("Error fetching latest track:", err);
        }
      } finally {
        if (isSubscribed) {
          setIsLoading(false);
        }
      }
    };

    // Initial fetch
    fetchLatestTrack();

    // Set up periodic refresh every hour
    intervalId = setInterval(fetchLatestTrack, 3600000); // 1 hour

    return () => {
      isSubscribed = false; // Clean up on unmount
      clearInterval(intervalId);
    };
  }, [getSpotifyToken, SPOTIFY_ARTIST_ID]);

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

  if (error) {
    return (
      <div
        className="alert alert-danger d-flex align-items-center"
        role="alert">
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div className="w-100" style={{ height: "352px" }}>
      {trackId && (
        <iframe
          title="Spotify Latest Track Player"
          className="w-100 h-100 rounded"
          src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      )}
    </div>
  );
};

export default LatestTrackSpotifyAPI;
