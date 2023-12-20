cartArray = JSON.parse(localStorage.getItem('cart'));

let totalCost = 0.00;
let deliveryFee = 0.00;

for (let item in cartArray) {
    totalCost += (parseFloat(cartArray[item]._price) * parseFloat(cartArray[item]._quantity));
}

if (totalCost < 350.00) {
    deliveryFee = 8.00;
}

document.write('<div class="col-12 col-md-5 mb-3 mb-md-0">');
for (let item in cartArray) {
    document.write('<div class="border rounded-5 my-4">');
    document.write('<div class="row">');
    document.write('<div class="col-lg-6">');
    document.write('<img class="img-fluid" src="' + cartArray[item]._image + '">');
    document.write('</div>');
    document.write('<div class="col-lg-6 my-auto text-center text-lg-start">');
    document.write('<h4>' + cartArray[item]._model + '</h4>');
    document.write('<h6>Type: ' + cartArray[item]._color + '</h6>');
    document.write('<h6>Qty: ' + cartArray[item]._quantity + '</h6>');
    document.write('</div>');
    document.write('</div>');
    document.write('</div>');
}
document.write('</div>');

document.write('<div class="col-12 col-lg-4 my-auto">');
document.write('<form id="payment" method="post">');
document.write('<div class="mb-4">');
document.write('<label for="payment-method" class="form-label text-white">Payment method</label>');
document.write('<select id="paymentMethod" name="payment-method" class="form-select" placeholder="Confirm your country" aria-label="Payment method" required>');
document.write('<option value="" disabled selected>Select</option>');
document.write('<option value="credit-card">Credit Card</option>');
document.write('<option value="debit-card">Debit Card</option>');
document.write('</select>');
document.write('</div>');

document.write('<div class="form-group my-2">');
document.write('<label style="font-family:\'DM Sans\', sans-serif" class="text-white" for="cardName">Name on Card</label>');
document.write('<input type="text" style="font-family:\'DM Sans\', sans-serif" class="form-control" id="cardName" placeholder="Name on Card" required>');
document.write('<br />');
document.write('<label class="text-white" for="cardNumber">Card Number</label>');
document.write('<input type="text" style="font-family:\'DM Sans\', sans-serif" class="form-control" id="cardNumber" placeholder="Card Number" required>');
document.write('<br />');
document.write('<div class="row">');
document.write('<div class="col-7">');
document.write('<label class="text-white" for="expiryDate">Expiry Date</label>');
document.write('<input type="text" style="font-family:\'DM Sans\', sans-serif" class="form-control" id="expiryDate" placeholder="MM/YY" required>');
document.write('</div>')
document.write('<div class="col-5">');
document.write('<label class="text-white" for="cvv">CVV</label>');
document.write('<input type="text" style="font-family:\'DM Sans\', sans-serif" class="form-control" id="cvv" placeholder="CVV" required>');
document.write('</div>')
document.write('</div>');
document.write('</div>');

document.write('<div class="mt-4 text-center text-lg-start">');
document.write('<h4>Total: S$' + (totalCost + deliveryFee).toFixed(2) + '</h4>');
document.write('</div>');

document.write('<button class="btn btn-secondary mb-3" type="submit" id="makePayment" style="width: 100%;">Proceed to Pay</button>');
document.write('<div class="form-check">');
document.write('<input class="form-check-input" type="checkbox" name="pp-agree" value="1" required>');
document.write('<label class="form-check-label text-white" for="pp-agree">By clicking on this, you are agreeing to the <a class="text-white" href="privacy.html">Privacy Policy</a>.</label>');
document.write('</div>');
document.write('</form>');
document.write('</div>');