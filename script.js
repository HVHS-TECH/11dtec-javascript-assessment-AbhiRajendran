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

let cart = JSON.parse(localStorage.getItem("cart")) || [];
 
function addQuantity(id, name) {

    let quantity = parseInt(document.getElementById(id).value);

    if (isNaN(quantity) ||  quantity <=0) {
        alert("Please enter a valid quantity.");
        return;
    }

    cart.push({
        item: name,
        quantity: quantity
    }); 

    localStorage.setItem("cart", JSON.stringify(cart));
    
    alert(quantity + " " + name + "(s) added to cart!");

    document.getElementById(id).value = "";
}


