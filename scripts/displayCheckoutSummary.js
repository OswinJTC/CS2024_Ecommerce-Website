cartArray = JSON.parse(localStorage.getItem('cart'));

if (cartArray.length === 0) {
    document.write('<div class="mb-2"><strong>Subtotal: </strong>S$0.00</div>');
    document.write('<div class="mb-2"><strong>Discount: -</strong>S$0.00</div>');
    document.write('<div class="mb-2"><strong>Delivery: </strong>S$0.00</div>');
    document.write('<p class="my-2" style="font-size: 28px;"><strong>Total: </strong>S$0.00</p>');
} else {
    let totalCost = 0.00;
    let deliveryFee = 0.00;

    for (let item in cartArray) {
        totalCost += (parseFloat(cartArray[item]._price) * parseFloat(cartArray[item]._quantity));
    }

    if (totalCost < 350.00) {
        deliveryFee = 8.00;
    }

    document.write('<div class="mb-2"><strong>Subtotal: </strong>S$' + totalCost.toFixed(2) + '</div>');
    document.write('<div class="mb-2"><strong>Discount: -</strong>S$0.00</div>');
    document.write('<div class="mb-2"><strong>Delivery: </strong>S$'+ deliveryFee.toFixed(2) + '</div>');
    document.write('<p class="my-2" style="font-size: 28px;"><strong>Total: </strong>S$' + (totalCost + deliveryFee).toFixed(2) + '</p>');

}