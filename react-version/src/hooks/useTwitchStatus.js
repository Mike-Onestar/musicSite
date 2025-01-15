// hooks/useTwitchStatus.js
import { useState, useEffect } from "react";

// In a real application, these would come from environment variables
const TWITCH_CLIENT_ID = "YOUR_CLIENT_ID";
const TWITCH_CHANNEL = "CHANNEL_NAME";

const useTwitchStatus = () => {
  // State to track if stream is live
  const [isLive, setIsLive] = useState(false);
  // State to track any errors
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to check Twitch status
    const checkTwitchStatus = async () => {
      try {
        const response = await fetch(
          `https://api.twitch.tv/helix/streams?user_login=${TWITCH_CHANNEL}`,
          {
            headers: {
              "Client-ID": TWITCH_CLIENT_ID,
              Authorization: "Bearer YOUR_ACCESS_TOKEN",
            },
          }
        );

        const data = await response.json();
        setIsLive(data.data.length > 0);
      } catch (error) {
        console.error("Error checking Twitch status:", error);
        setError(error);
      }
    };

    // Check status immediately when component mounts
    checkTwitchStatus();

    // Set up interval to check status every minute
    const interval = setInterval(checkTwitchStatus, 60000);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs once on mount

  return { isLive, error };
};

export default useTwitchStatus;
