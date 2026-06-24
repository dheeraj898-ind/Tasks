const MENU =
{
    crust:
    {
        thin: 8,
        regular: 10,
        stuffed: 12
    },

    size:
    {
        small: 1,
        medium: 1.5,
        large: 2
    },

    toppings:
    {
        cheese: 1,
        mushrooms: 1,
        peppers: 1,
        pepperoni: 1,
        chicken: 1
    }
};

let selectedSize = "medium";

function selectSize(size)
{
    selectedSize = size;
}


// PURE FUNCTION - 1

const calculateBasePrice = (crust, size) =>
{
    const crustPrice =
        MENU.crust[crust] ||
        MENU.crust.regular;

    const sizePrice =
        MENU.size[size] ||
        MENU.size.medium;

    return crustPrice * sizePrice;
};


// PURE FUNCTION - 2

const calculateToppingsPrice = (toppings) =>
{
    return toppings.reduce(
        (total, topping) =>
        {
            return total +
            MENU.toppings[topping];
        },
        0
    );
};


// HIGHER ORDER FUNCTION

const calculateTotalPrice =
(
    calculateBasePrice,
    calculateToppingsPrice
) =>
{
    return (crust, size, toppings) =>
    {
        const basePrice =
            calculateBasePrice(
                crust,
                size
            );

        const toppingsPrice =
            calculateToppingsPrice(
                toppings
            );

        return basePrice +
               toppingsPrice;
    };
};


const getFinalPrice =
calculateTotalPrice(
    calculateBasePrice,
    calculateToppingsPrice
);


function generateBill()
{
    const crust =
        document.getElementById("crust").value;

    const checkedBoxes =
        document.querySelectorAll(
            "input[type='checkbox']:checked"
        );

    let toppings = [];

    checkedBoxes.forEach(
        (box) =>
        {
            toppings.push(
                box.value
            );
        }
    );

    const basePrice =
        calculateBasePrice(
            crust,
            selectedSize
        );

    const toppingsPrice =
        calculateToppingsPrice(
            toppings
        );

    const subtotal =
        getFinalPrice(
            crust,
            selectedSize,
            toppings
        );

    const discount =
        subtotal * 0.10;

    const finalTotal =
        subtotal - discount;


    document.getElementById(
        "pizzaName"
    ).innerHTML =
    `${selectedSize.toUpperCase()} ${crust.toUpperCase()} PIZZA`;


    document.getElementById(
        "basePrice"
    ).innerHTML =
    `Base Price : $${basePrice.toFixed(2)}`;


    document.getElementById(
        "toppingsPrice"
    ).innerHTML =
    `Toppings : $${toppingsPrice.toFixed(2)}`;


    document.getElementById(
        "subtotal"
    ).innerHTML =
    `Subtotal : $${subtotal.toFixed(2)}`;


    document.getElementById(
        "discount"
    ).innerHTML =
    `Discount : 10%`;


    document.getElementById(
        "finalTotal"
    ).innerHTML =
    `Final Total : $${finalTotal.toFixed(2)}`;
}