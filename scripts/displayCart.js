let cartArray = JSON.parse(localStorage.getItem('cart'));

if (cartArray.length === 0) {
    document.write('<h1>Cart is empty</h1>');
} else {
    for (let item in cartArray) {
        document.write('<div class="row d-md-flex border rounded-5 py-3 mb-4">');
        document.write('<div class="col-md-5 align-self-center">');
        document.write('<img class="img-fluid" src="' + cartArray[item]._image + '">');
        document.write('</div>');
        document.write('<div class="col-md-6 align-self-center py-4">');
        document.write('<h1>$' + cartArray[item]._price + '</h1>');
        document.write('<h4>' + cartArray[item]._model + '</h4>');
        document.write('<p>Type: ' + cartArray[item]._color + '</p>');
        document.write('<div class="qty-selector input-group">');
        document.write('<button id="minus_' + item + '" style="width: 30px;" class="btn btn-primary text-center p-2">-</button>');
        document.write('<input id="quantity_' + item + '" name="quantity" class="border-0" style="text-align: center; width: 62px;" type="text" value="' + cartArray[item]._quantity +'" readonly>')
        document.write('<button id="plus_' + item + '" style="width: 30px;" class="btn btn-primary text-center p-2">+</button>');
        document.write('</div>');
        document.write('</div>');
        document.write('<div class="col-md-1 align-self-top">');
        document.write('<i id="delete_' + item + '" class="fa-regular fa-trash-can fa-clickable"></i>');
        document.write('</div>');
        document.write('</div>');
    }

    document.write('<div class="form-check mt-3 justify-content-left">');
    document.write('<input class="form-check-input" id="buyTracshield" type="checkbox" name="buy-tracshield" value="1" required>');
    document.write('<label class="form-check-label text-white" for="pp-agree">Add <a class="text-white" href="tracshield.html">TracShield Warranty</a> at $99 for all your products</label>');
    document.write('</div>');
}