cartArray = JSON.parse(localStorage.getItem('cart'));

for (let item in cartArray) {
    document.write('<div class="row col-md-6 border rounded-5 mx-auto mt-5">');
    document.write('<div class="row my-3">');
    document.write('<div class="col-md-6">');
    document.write('<img class="img-fluid" src="' + cartArray[item]._image + '">');
    document.write('</div>');
    document.write('<div class="col-12 col-md-6 m-auto text-center text-md-start">');
    document.write('<h3>' + cartArray[item]._model + '</h3>');
    document.write('<h6>Type: ' + cartArray[item]._color + '</h6>');
    document.write('<h6>Qty: ' + cartArray[item]._quantity + '</h6>');
    document.write('</div>');
    document.write('</div>');
    document.write('</div>');
}