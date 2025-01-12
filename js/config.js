function updateTwitchStatus(isLive) {
  const statusButton = document.querySelector(".btn-purple");
  const liveDot = statusButton.querySelector(".live-dot");
  const statusText = statusButton.querySelector(".status-text");

  if (isLive) {
    statusText.textContent = "Live";
    liveDot.style.display = "inline-block";
  } else {
    statusText.textContent = "Offline";
    liveDot.style.display = "none";
  }
}

// Example usage:
// updateTwitchStatus(true); // When stream starts
// updateTwitchStatus(false); // When stream ends
