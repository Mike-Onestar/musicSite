import { useState, useEffect } from "react";

const useTwitchStatus = () => {
  // We'll add a loading state to prevent rapid re-renders
  const [isLive, setIsLive] = useState(false);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get environment variables once at the start
  const TWITCH_CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;
  const TWITCH_CLIENT_SECRET = process.env.REACT_APP_TWITCH_CLIENT_SECRET;
  const TWITCH_CHANNEL = process.env.REACT_APP_TWITCH_CHANNEL;

  // Function to get Twitch access token
  const getTwitchAccessToken = async () => {
    try {
      // Create the URL-encoded body properly
      const params = new URLSearchParams();
      params.append("client_id", TWITCH_CLIENT_ID);
      params.append("client_secret", TWITCH_CLIENT_SECRET);
      params.append("grant_type", "client_credentials");

      const response = await fetch("https://id.twitch.tv/oauth2/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Token Error: ${errorData.message || response.statusText}`
        );
      }

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error getting Twitch access token:", error);
      throw error;
    }
  };

  // Function to check if channel is live
  const checkTwitchStatus = async (token) => {
    if (!token) {
      throw new Error("No access token available");
    }

    try {
      const response = await fetch(
        `https://api.twitch.tv/helix/streams?user_login=${TWITCH_CHANNEL}`,
        {
          headers: {
            "Client-ID": TWITCH_CLIENT_ID,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Status Error: ${errorData.message || response.statusText}`
        );
      }

      const data = await response.json();
      return data.data.length > 0;
    } catch (error) {
      console.error("Error checking Twitch status:", error);
      throw error;
    }
  };

  useEffect(() => {
    let isSubscribed = true; // Help prevent updates after unmount
    let intervalId;

    const updateStatus = async () => {
      if (!isSubscribed) return;

      try {
        setIsLoading(true);

        // Only get new token if we don't have one
        let currentToken = accessToken;
        if (!currentToken) {
          currentToken = await getTwitchAccessToken();
          if (isSubscribed) {
            setAccessToken(currentToken);
          }
        }

        // Check stream status
        const streamIsLive = await checkTwitchStatus(currentToken);
        if (isSubscribed && streamIsLive !== isLive) {
          setIsLive(streamIsLive);
          setError(null);
        }
      } catch (error) {
        if (isSubscribed) {
          setError(error.message);
          // Only clear token if it's an authentication error
          if (
            error.message.includes("Token Error") ||
            error.message.includes("401")
          ) {
            setAccessToken(null);
          }
        }
      } finally {
        if (isSubscribed) {
          setIsLoading(false);
        }
      }
    };

    // Initial check
    updateStatus();

    // Set up polling every minute
    intervalId = setInterval(updateStatus, 60000);

    // Cleanup function
    return () => {
      isSubscribed = false;
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []); // Remove accessToken from dependencies

  return { isLive, error, isLoading };
};

export default useTwitchStatus;
