// Spotify credentials
const SPOTIFY_CLIENT_ID = '00c54a9609b24633a6952f9ae73e791a';
const SPOTIFY_CLIENT_SECRET = '1dd1013267fa4be6b111b061a1d94246';
const SPOTIFY_ARTIST_ID = '6vnoKId12sUVM7qPnvcnP8';  

// Function to get Spotify access token
function getSpotifyToken() {
    return $.ajax({
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET)
        },
        data: {
            grant_type: 'client_credentials'
        }
    });
}

// Function to get latest track
function getLatestTrack() {
    getSpotifyToken()
        .then(function(response) {
            const token = response.access_token;
            
            // Get artist's top tracks
            return $.ajax({
                url: `https://api.spotify.com/v1/artists/${SPOTIFY_ARTIST_ID}/top-tracks?market=US`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        })
        .then(function(data) {
            console.log('Spotify API Response:', data); // Debug log
            if (data.tracks && data.tracks.length > 0) {
                const latestTrack = data.tracks[0];
                updateSpotifyEmbed(latestTrack.id);
            }
        })
        .catch(function(error) {
            console.error('Error fetching latest track:', error);
            // Display error in the UI
            $('#spotify-loading').addClass('d-none');
            $('.spotify-embed').removeClass('d-none')
                             .attr('src', 'about:blank')
                             .after('<div class="alert alert-danger">Failed to load track. Please try again later.</div>');
        });
}

// Function to update the Spotify embed
function updateSpotifyEmbed(trackId) {
    // Show loading state
    $('#spotify-loading').removeClass('d-none');
    $('.spotify-embed').addClass('d-none');
    
    // Update the iframe src
    $('.spotify-embed')
        .attr('src', `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`)
        .on('load', function() {
            // Hide loading state once iframe is loaded
            $('#spotify-loading').addClass('d-none');
            $('.spotify-embed').removeClass('d-none');
        });
}

// When document is ready
$(document).ready(function() {
    console.log('Document ready, fetching latest track...'); // Debug log
    getLatestTrack();
    
    // Refresh every hour
    setInterval(getLatestTrack, 3600000);
});