console.log("Is it Working?")

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let output = "";

for(let i = 0; i < cart.length; i++){   
    output += `
    <p>
    ${cart[i].item} <br>
    Price : $${cart[i].price}<br>
    Quantity : ${cart[i].quantity} <br>
    Total Price : $${cart[i].quantity* cart[i].price}
    </p>
    `;
}

document.getElementById("cart").innerHTML = output;

function resetCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("cart").innerHTML = "<p><br>Your cart is empty.<br></p>";

    alert("Cart has been reset.");
}