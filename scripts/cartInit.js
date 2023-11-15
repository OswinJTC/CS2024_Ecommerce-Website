window.onload = function() {
    if (localStorage.getItem('cart') === null) {
        cartArray = [];
        localStorage.setItem('cart', JSON.stringify(cartArray));
    }

    toggleCartIndicator();
}