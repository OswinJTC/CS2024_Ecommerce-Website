let cartArray = JSON.parse(localStorage.getItem('cart'));

if (cartArray.length === 0) {
    window.location.href = 'index.html?redirect=cart_empty';
}