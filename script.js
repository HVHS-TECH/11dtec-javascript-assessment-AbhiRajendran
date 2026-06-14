console.log("Working?")


const images =["cafeone.png","cafetwo.png","cafethree.png"];
let currentImage = 0;

const imageElement = document.getElementById("Slideshow")

function changeImage(){
imageElement.classList.add("fade-out");
setTimeout(() => {
currentImage = (currentImage + 1) % images.length;
imageElement.src = images[currentImage];
imageElement.classList.remove("fade-out");
}, 500);
}

setInterval(changeImage, 4000);