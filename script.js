console.log("Working?")


const images =["cafeone.png","cafetwo.png","cafethree.png"];

let currentImage = 0;

const imageElement = document.getElementById("Slideshow")

function changeImage(){
imageElement.classList.add("fade-out")

currentImage = (currentImage + 1) % images.length;
imageElement.src = images[currentImage];

}

setInterval(changeImage, 4000);