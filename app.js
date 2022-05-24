const prevButton = document.getElementById("carousel-button-prev");

const nextButton = document.getElementById("carousel-button-next");

const imageItems = document.getElementsByClassName("carousel-item");

let currentImage = 0;

let isTouchTheEnd = false;

prevButton.style.visibility = "hidden";

nextButton.addEventListener("click", moveToNextImage);

prevButton.addEventListener("click", moveToPrevImage);

function moveToNextImage() {
  currentImage += 1;
  if (currentImage < imageItems.length) {
    imageItems[currentImage].classList.add("carousel-item-visible");
    imageItems[currentImage - 1].classList.remove("carousel-item-visible");
    prevButton.style.visibility = "visible";
  }

  if (currentImage === imageItems.length - 1) {
    nextButton.style.visibility = "hidden";
    isTouchTheEnd = true;
  }
}

function moveToPrevImage() {
  nextButton.style.visibility = "visible";
  if (currentImage !== 0) {
    currentImage -= 1;
    imageItems[currentImage + 1].classList.remove("carousel-item-visible");
    imageItems[currentImage].classList.add("carousel-item-visible");
  }

  if (currentImage === 0) {
    prevButton.style.visibility = "hidden";
    nextButton.style.visibility = "visible";
    isTouchTheEnd = false;
  }
}

setInterval(() => {
  if (isTouchTheEnd) {
    moveToPrevImage();
  } else {
    moveToNextImage();
  }
}, 4000);
// setInterval(moveToPrevImage, 4000);
