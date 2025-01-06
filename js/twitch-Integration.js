// Twitch Integration Configuration
const TWITCH_CLIENT_ID = 'YOUR_CLIENT_ID';
const TWITCH_CHANNEL = 'CHANNEL_NAME';

// Check Twitch Stream Status
async function checkTwitchStatus() {
  try {
    const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${TWITCH_CHANNEL}`, {
      headers: {
        'Client-ID': TWITCH_CLIENT_ID,
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
      }
    });
    
    const data = await response.json();
    const isLive = data.data.length > 0;
    updateTwitchStatus(isLive);
  } catch (error) {
    console.error('Error checking Twitch status:', error);
  }
}

// Initialize status check
document.addEventListener('DOMContentLoaded', () => {
  checkTwitchStatus();
  setInterval(checkTwitchStatus, 60000);
});