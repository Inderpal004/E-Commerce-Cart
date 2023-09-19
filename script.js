let PtotalAmount = document.getElementById('PtotalAmount')
let totalCartAmount = document.getElementById('total_cart_amt')
let shippingAmount = document.getElementById('shippingAmount')
let discountCode = document.getElementById('discount_code1')

const decreaseNumber = (increec, itemval2) => {
    let itemval = document.getElementById(increec);
    let itemprice1 = document.getElementById(itemval2);
    if (parseInt(itemval.value) <= 0) {
        itemval.value = 0;
    } else {
        itemval.value = parseInt(itemval.value) - 1;
        itemprice1.innerHTML = parseInt(itemprice1.innerHTML) - 15;
        PtotalAmount.innerHTML = parseInt(PtotalAmount.innerHTML) - 15
        totalCartAmount.innerHTML = parseInt(PtotalAmount.innerHTML) + parseInt(shippingAmount.innerHTML)
        itemval.style.backgroundColor = "#fff";
        itemval.style.color = "black";
    }
}

const increaseNumber = (decre, itemval1) => {
    let itemval = document.getElementById(decre);
    let itemprice = document.getElementById(itemval1);
    if (parseInt(itemval.value) >= 5) {
        itemval.value = 5;
        alert("Maximum 5 Allowed");
        itemval.style.backgroundColor = "red";
        itemval.style.color = "white";
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
        PtotalAmount.innerHTML = parseInt(PtotalAmount.innerHTML) + 15
        totalCartAmount.innerHTML = parseInt(PtotalAmount.innerHTML) + parseInt(shippingAmount.innerHTML)
    }
}


const discount_code = () => {
    let error = document.getElementById('error')
    if (discountCode.value === 'Inder') {
        let totalCurrent = parseInt(totalCartAmount.innerHTML);
        let newtotal = parseInt(totalCurrent) - 20
        totalCartAmount.innerHTML = newtotal
        error.innerHTML = 'Discount Applied of $20'
    }
    else {
        error.innerHTML = 'Invalid Code'
    }
}
