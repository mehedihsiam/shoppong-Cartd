function carts(product, priceId, priceAmount, isAdd) {
    const cartInput = document.getElementById(product);
    let cartNumber = cartInput.value;
    if (isAdd == true) {
        cartNumber = parseInt(cartNumber) + 1;
    }
    else {
        if (cartInput.value > 1) {
            cartNumber = parseInt(cartNumber) - 1;
        }
    }
    cartInput.value = cartNumber;

    const productTotal = document.getElementById(priceId);
    productTotal.innerText = cartNumber * priceAmount;

};


// phone count minus
var mobileCountMinus = document.getElementById('phone-minus');
mobileCountMinus.addEventListener('click', function () {
    const phone = carts('phone', 'mobile-price', 1219, false);
});

// phone count plus
var mobileCountPlus = document.getElementById('phone-plus');
mobileCountPlus.addEventListener('click', function () {
    const phone = carts('phone', 'mobile-price', 1219, true);
    console.log(phone);
});



// casing count minus
var caseCountMinus = document.getElementById('case-minus');
caseCountMinus.addEventListener('click', function () {
    const casing = carts('case', 'case-price', 59, false);
});

// casing count plus
var caseCountPlus = document.getElementById('case-plus');
caseCountPlus.addEventListener('click', function () {
    const casing = carts('case', 'case-price', 59, true);
})