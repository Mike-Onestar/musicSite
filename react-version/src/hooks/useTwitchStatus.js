import { useState, useEffect, useCallback } from "react";

const useTwitchStatus = () => {
  const [isLive, setIsLive] = useState(false);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const TWITCH_CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;
  const TWITCH_CLIENT_SECRET = process.env.REACT_APP_TWITCH_CLIENT_SECRET;
  const TWITCH_CHANNEL = process.env.REACT_APP_TWITCH_CHANNEL;

  const getTwitchAccessToken = useCallback(async () => {
    try {
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
  }, [TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET]);

  const checkTwitchStatus = useCallback(
    async (token) => {
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
    },
    [TWITCH_CLIENT_ID, TWITCH_CHANNEL]
  );

  useEffect(() => {
    let isSubscribed = true;
    let intervalId;

    const updateStatus = async () => {
      try {
        setIsLoading(true);

        let currentToken = accessToken;
        if (!currentToken) {
          currentToken = await getTwitchAccessToken();
          if (isSubscribed) {
            setAccessToken(currentToken);
          }
        }

        const liveStatus = await checkTwitchStatus(currentToken);
        if (isSubscribed) {
          setIsLive(liveStatus);
        }
      } catch (error) {
        if (isSubscribed) {
          setError(error.message);
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

    updateStatus();

    intervalId = setInterval(updateStatus, 60000);

    return () => {
      isSubscribed = false;
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [accessToken, getTwitchAccessToken, checkTwitchStatus]);

  return { isLive, error, isLoading };
};

export default useTwitchStatus;
