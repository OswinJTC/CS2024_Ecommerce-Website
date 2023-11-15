function sendPaymentSuccessModal() {
    const submitModal = new bootstrap.Modal(document.getElementById('submitModal'), focus);
    submitModal.show();
}

function clearCart() {
    newCart = [];
    localStorage.setItem('cart', JSON.stringify(newCart));
}

document.getElementById('payment').addEventListener('submit', (e) => {
    sendPaymentSuccessModal();
    clearCart();
    toggleCartIndicator();
    e.preventDefault();
});