console.log("Is it Working?")

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let output = "";

for(let i = 0; i < cart.length; i++){   
    output += `
    <h4>
    ${cart[i].item} <br>
    Price : $${cart[i].price}<br>
    Quantity : ${cart[i].quantity} <br>
    Total Price : $${cart[i].quantity* cart[i].price}<br><br>
    <button onclick="removeItem(${i})">Remove Item</button>
    </h4>
    `;
}

document.getElementById("cart").innerHTML = output;

function resetCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("cart").innerHTML = "<h4>Your cart is empty.<br></h4>";

    alert("Cart has been reset.");
}

function removeItem(index) {
cart.splice(index, 1);

localStorage.setItem("cart", JSON.stringify(cart));

location.reload();
}