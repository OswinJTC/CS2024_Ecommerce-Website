function isCartFilled() {
    cartArray = JSON.parse(localStorage.getItem('cart'));
    if (cartArray.length === 0) {
        return false;
    } else {
        return true;
    }
}

function sendSuccessToast() {
    let toastNode = document.getElementById('cartToast');
    let toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastNode);
    toastBootstrap.show();
}

function addToCart() {
    model = document.getElementById('model').innerText;
    price = parseInt(document.getElementById('price').innerText.substring(4));
    color = document.getElementById('color').value;
    quantity = parseInt(document.getElementById('quantity').value);

    cartArray = JSON.parse(localStorage.getItem('cart'));

    if (cartArray.length === 0) {
        cartItem = new CartItem(model, price, color, quantity);
        cartArray.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cartArray));
    } else {
        for (let item in cartArray) {
            itemModel = cartArray[item]._model;
            itemColor = cartArray[item]._color;
           if (model === itemModel && color === itemColor) {
                const oldQty = cartArray[item]._quantity
                const newQty = quantity + oldQty;
                cartArray[item]._quantity = newQty;
                localStorage.setItem('cart', JSON.stringify(cartArray));
            } else {
                cartItem = new CartItem(model, price, color, quantity);
                cartArray.push(cartItem);
                localStorage.setItem('cart', JSON.stringify(cartArray));
            }
        } 
    }  
}

function toggleCartIndicator() {
    cartFilled = isCartFilled();
    cartIndicator = document.getElementById('cartFilled');
    if (cartFilled === false) {
        cartIndicator.style.visibility = 'hidden';
    } else {
        cartIndicator.style.visibility = 'visible';
    }
}

function isFormFilled() {
    colorInput = document.getElementById('color');
    if (document.getElementById('color').validity.valueMissing) {
        colorInput.setCustomValidity('Please choose one of the color options.');
    } else {
        colorInput.setCustomValidity('');

        addToCart();
        sendSuccessToast();
        toggleCartIndicator();
    }

    colorInput.reportValidity();
}