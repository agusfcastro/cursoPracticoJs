function priceDiscount(price, discount){
    const percentajePriceWithDiscount = 100 - discount;
    const priceWithDiscount = (price * percentajePriceWithDiscount) / 100;

    return priceWithDiscount;
}

// Interacción con HTML

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const priceWithDiscount = priceDiscount(priceValue, discountValue);
 
    const resultP = document.getElementById("resultP");
    resultP.innerText = `Tu precio con el descuento del: ${discountValue}% es de: $${priceWithDiscount}`;
}

