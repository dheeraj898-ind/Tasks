const crustPrices = {thin: 8, regular: 10, stuffed: 12 };
const sizePrices = {small: 1, medium: 1.5, large: 2 };

let selectedSize = "medium";

function selectSize(size){
    selectedSize = size;
}

function generateBill(){

    let crust = document.getElementById("crust").value;
    let basePrice = crustPrices[crust] * sizePrices[selectedSize];

    let toppingsPrice = 0;

    let checkboxes = document.querySelectorAll("input[type='checkbox']");

    for(let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            toppingsPrice =toppingsPrice + 1;
        }
    }

    let subtotal =basePrice + toppingsPrice;

    let discount = subtotal * 0.10;

    let finalTotal =subtotal - discount;

    document.getElementById("receiptBox").style.backgroundColor ="lightgreen";

    document.getElementById("pizzaName").innerHTML = selectedSize.toUpperCase() + " " + crust.toUpperCase() + " PIZZA";

    document.getElementById("basePrice").innerHTML = "Base Price : $" + basePrice.toFixed(2);

    document.getElementById("toppingsPrice").innerHTML = "Toppings : $" + toppingsPrice.toFixed(2);

    document.getElementById("subtotal").innerHTML = "Subtotal : $" + subtotal.toFixed(2);

    document.getElementById("discount").innerHTML = "Discount : 10%";

    document.getElementById("finalTotal").innerHTML = "Final Total : $" + finalTotal.toFixed(2);
}

function clearBill()
{
    document.getElementById("pizzaName").innerHTML = "";

    document.getElementById("basePrice").innerHTML = "";

    document.getElementById("toppingsPrice").innerHTML = "";

    document.getElementById("subtotal").innerHTML = "";

    document.getElementById("discount").innerHTML = "";

    document.getElementById("finalTotal").innerHTML = "";

    document.getElementById("receiptBox").style.backgroundColor ="#eead63";
}