const prevButton = document.getElementById("carousel-button-prev");

const nextButton = document.getElementById("carousel-button-next");

const imageItems = document.getElementsByClassName("carousel-item");

let currentImage = 1;

prevButton.style.visibility = "hidden";

nextButton.addEventListener("click", (e) => {
  currentImage += 1;
  if (currentImage <= imageItems.length) {
    imageItems[currentImage - 1].classList.add("carousel-item-visible");
    imageItems[currentImage - 2].classList.remove("carousel-item-visible");
    prevButton.style.visibility = "visible";
  }

  if (currentImage === imageItems.length) {
    nextButton.style.visibility = "hidden";
  }
});
