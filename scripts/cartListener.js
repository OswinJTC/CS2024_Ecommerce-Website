function toggleQuantities() {
    document.addEventListener('click', (e) => {
        const splitID = e.target.id.split('_');
        if (splitID[0] === 'plus') {
            const qtyID = 'quantity_' + splitID[1];
            let qty = parseInt(document.getElementById(qtyID).value);
            document.getElementById(qtyID).value = qty + 1;
        } else if (splitID[0] === 'minus') {
            const qtyID = 'quantity_' + splitID[1];
            let qty = parseInt(document.getElementById(qtyID).value);
            document.getElementById(qtyID).value = qty - 1;
        }
    })
}

function deleteCartItem() {
    document.addEventListener('click', (e) => {
        const splitID = e.target.id.split('_');
        if (splitID[0] === 'delete') {
            cartArray.splice(splitID[1], splitID[1]);
            localStorage.setItem('cart', JSON.stringify(cartArray));
            window.location.href = 'cart.html';
        }
    })
}

window.onload = function() {
    toggleQuantities();
    deleteCartItem();
}