/*Checking */
console.log("Is it Working?")

/*Showing items in Cart */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let output = "";
let totalCost = 0;

for (let i = 0; i < cart.length; i++) {
    let itemTotal = cart[i].quantity * cart[i].price;
    totalCost += itemTotal;
    output += `
    <h4> 
    ${cart[i].item} <br>
    Price : $${cart[i].price}<br>
    Quantity : ${cart[i].quantity} <br>
    Total Price : $${cart[i].quantity * cart[i].price}<br><br>
    <button onclick="removeItem(${i})">Remove Item</button>
    </h4>   
    `;
}

if (cart.length > 0) {
    output += `<h2>Total Cost: $${totalCost}</h2>`;
    document.getElementById("cart").innerHTML = output;
} else{
    document.getElementById("cart").innerHTML = "<h4>Your cart is empty.</h4>";
 
}


/*Reset the whole cart */

function resetCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("cart").innerHTML = "<h4>Your cart is empty.<br></h4>";

    alert("Cart has been reset.");
}

/*Remove a single item*/

function removeItem(index) {
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}

/*Receipt */

function nameAndMoney() {
    let customer = document.getElementById("name").value;
    let money = Number(document.getElementById("money").value);

    if (customer === "") {
        alert("Please enter your name.");
        return;
    }

    if (cart.length === 0) {
        alert("You cart is empty.");
        return;
    }

    if (money < totalCost) {
        alert("Not enough Money.");
        return;
    }

    let change = money - totalCost;

    let receipt = `
    <h2> Creamy Cafe </h2>

    <hr>
    <p> Customer: ${customer}</p>
    <p> Date: ${new Date().toLocaleString()}</p>
    <hr>
    
    <h3>Items</h3>
    `;

    for (let i = 0; i < cart.length; i++) {
        let itemTotal = cart[i].price * cart[i].quantity;

        receipt += `
        ${cart[i].item}
        x ${cart[i].quantity}
        - $${itemTotal}<br>
        `;
    }

    receipt += `
    <hr>

    <p>Total: $${totalCost}</p>
    <p>Paid: $${money}</p>
    <p>Change: $${change}</p>

    <h3>Thank you for ordering with Creamy Cafe!</h3>
    `;

    document.getElementById("receipt").innerHTML = receipt;
    document.getElementById("receipt").style.display = "block";

    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("cart").innerHTML = "<h4>Your cart is empty.<br></h4>";
}
