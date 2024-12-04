const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const imageContainer = document.querySelector(".image-container");

const images = [
  "./images/image1.webp",
  "./images/image2.webp",
  "./images/image3.jpeg",
  "./images/image4.jpeg",
  "./images/image5.webp",
  "./images/image6.jpeg",
];


let currentIndex = 0;

function updateImage() {
  imageContainer.querySelector("img").src = images[currentIndex];

  const allImages = document.querySelectorAll(".images-container .image");
  allImages.forEach((image) => image.classList.remove("active"));

  allImages[currentIndex].classList.add("active");
}

leftBtn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex = currentIndex - 1;
  }
  updateImage();
});

rightBtn.addEventListener("click", () => {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex + 1;
  }
  updateImage();
});
