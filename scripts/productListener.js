window.onload = function() {

    if (localStorage.getItem('cart') === null) {
        cartArray = [];
        localStorage.setItem('cart', JSON.stringify(cartArray));
    }
    
    toggleCartIndicator();

    document.getElementById('add').addEventListener('click', isFormFilled);

    document.getElementById('color').addEventListener('change', toggleProductImage);
    
    toggleMinusButton();
    document.getElementById('plus').addEventListener('click', plusQuantity);
    document.getElementById('minus').addEventListener('click', minusQuantity);
    document.getElementById('plus').addEventListener('click', toggleMinusButton);
    document.getElementById('minus').addEventListener('click', toggleMinusButton);
    
}