function showPopup(imageSrc) {
  var popup = document.getElementById("photoPopup");
  var popupImg = document.getElementById("popupImg");

  popupImg.src = imageSrc;
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("photoPopup");
  popup.style.display = "none";
}

// Play background music
function playMusic() {
  var backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.play();
}

// Detect if the user is on iOS and prompt to play music
function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

if (isIOS()) {
  alert('Tap to play the background music.');
  document.body.addEventListener('click', function () {
    var backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.play();
  });
}
