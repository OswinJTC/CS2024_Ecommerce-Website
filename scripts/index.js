function sendEmptyCartToast() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const redirect = urlParams.get('redirect');

    if (redirect === 'cart_empty') {
        let toastNode = document.getElementById('emptyCartToast');
        let toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastNode);
        toastBootstrap.show();
    }
}

window.addEventListener('load', sendEmptyCartToast);