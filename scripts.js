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
  