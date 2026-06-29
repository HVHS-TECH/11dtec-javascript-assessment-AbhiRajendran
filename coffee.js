console.log("Working?")    

 
function homeCoffee(id, name) {
    let quantity = document.getElementById(id).value;

    if (quantity <= 0 || quantity === "") {
        alert("Please enter a quantity.");
        return;
    }

    alert(quantity + " " + name + "(s) added to cart!");
}
    