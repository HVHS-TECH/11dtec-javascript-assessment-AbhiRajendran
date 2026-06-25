/*Checking*/

console.log("Working?")

/*SlideShow Transition*/

const images =["coffee.jpg","tea.jpg","cafethree.png"];
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

/*Featured Item*/
 
function addQuantity(id, name) {
    let quantity = document.getElementById(id).value;

    if (quantity <= 0 || quantity === "") {
        alert("Please enter a quantity.");
        return;
    }

    alert(quantity + " " + name + "(s) added to cart!");
}

