console.log("Working?")    

 
let cart = JSON.parse(localStorage.getItem("cart")) || [];
 
function homeTea(id, name) {

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
