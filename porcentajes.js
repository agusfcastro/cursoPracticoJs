// Cupones de descuento
const coupons = [
    {
        name: 'couponExample',
        discount: 10,
    },
    {
        name: 'couponExample1',
        discount: 20,
    },
]


// Función para aplicar descuentos
function priceDiscount(price, discount){
    const pricePercentajeWithDiscount = 100 - discount;
    const priceWithDiscount = (price * pricePercentajeWithDiscount) / 100;

    return priceWithDiscount;
}

// Interacción con HTML
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const priceWithDiscount = priceDiscount(priceValue, discountValue);
 
    const resultP = document.getElementById("resultP");
    resultP.innerText = `Tu precio con el descuento del: ${discountValue}% es de: $${priceWithDiscount}`;
}

function onClickButtonCoupon(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isUserCouponValid = function (coupon) {
        return coupon.name === couponValue;
    }

    const userCoupon = coupons.find(isUserCouponValid);

    if (!userCoupon){
        alert('El cupón ' + couponValue + ' es inválido!') 
    }else {
        const discount = userCoupon.discount;
        const priceWDiscount = priceDiscount(priceValue, discount);
        
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es de: $" + priceWDiscount;
    }
  
}