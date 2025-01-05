function updateTwitchStatus(isLive) {
    const statusButton = document.querySelector('.btn-outline-danger'); // Select the status button
    const liveDot = statusButton.querySelector('span > span'); // Select the dot
    
    if (isLive) {
      statusButton.classList.remove('btn-outline-danger');
      statusButton.classList.add('btn-danger');
      statusButton.querySelector('span').textContent = 'Live';
      liveDot.style.display = 'inline-block';
    } else {
      statusButton.classList.remove('btn-danger');
      statusButton.classList.add('btn-outline-danger');
      statusButton.querySelector('span').textContent = 'Offline';
      liveDot.style.display = 'none';
    }
  }
  
  // Example usage:
  // updateTwitchStatus(true); // When stream starts
  // updateTwitchStatus(false); // When stream ends