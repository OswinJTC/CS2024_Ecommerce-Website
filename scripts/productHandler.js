function toggleMinusButton() {
    let qty = document.getElementById('quantity').value;
    if (parseInt(qty) === 1) {
        document.getElementById('minus').disabled = true;
    } else {
        document.getElementById('minus').disabled = false;
    }
}

function plusQuantity() {
    let qty = parseInt(document.getElementById('quantity').value);
    document.getElementById('quantity').value = qty + 1;
}

function minusQuantity() {
    let qty = parseInt(document.getElementById('quantity').value);
    document.getElementById('quantity').value = qty - 1;
}

function toggleProductImage() {
   let colorNode = document.getElementById('color');
   let imageNode = document.getElementById('productImage');

   const productName = document.getElementById('model').innerText;

   if (productName === 'TracRunner') {
        switch(colorNode.value) {
            case 'Black':
                imageNode.src = 'images/product-images/product1-black.png';
                break;
            case 'Grey':
                imageNode.src = 'images/product-images/product1-grey.png';
                break;
        }
    } else if (productName === 'TracActive') {
        switch(colorNode.value) {
            case 'Black':
                imageNode.src = 'images/product-images/product2-black.png';
                break;
            case 'Grey':
                imageNode.src = 'images/product-images/product2-grey.png';
                break;
       }
    } else if (productName === 'TraChronos') {
        switch(colorNode.value) {
            case 'Grey':
                imageNode.src = 'images/product-images/product3-grey.png';
                break;
            case 'White':
                imageNode.src = 'images/product-images/product3-white.png';
                break;
       }
    }

   
}