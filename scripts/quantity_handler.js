function toggleMinusButton() {
    qty = document.getElementById('quantity').value;
    if (parseInt(qty) === 1) {
        document.getElementById('minus').disabled = true;
    } else {
        document.getElementById('minus').disabled = false;
    }
}

function plusQuantity() {
    qty = parseInt(document.getElementById('quantity').value);
    document.getElementById('quantity').value = qty + 1;
}

function minusQuantity() {
    qty = parseInt(document.getElementById('quantity').value);
    document.getElementById('quantity').value = qty - 1;
}

window.onload = function() {
    document.getElementById('plus').addEventListener('click', plusQuantity);
    document.getElementById('minus').addEventListener('click', minusQuantity);
    document.getElementById('plus').addEventListener('click', toggleMinusButton);
    document.getElementById('minus').addEventListener('click', toggleMinusButton);

}