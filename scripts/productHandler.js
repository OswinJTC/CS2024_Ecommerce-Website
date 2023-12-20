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
            case 'Mint':
                imageNode.src = 'images/product-images/product2-mint.png';
                break;
            case 'Peach':
                imageNode.src = 'images/product-images/product2-peach.png';
                break;
       }
    } else if (productName === 'TraChronos') {
        switch(colorNode.value) {
            case 'Black':
                imageNode.src = 'images/product-images/product3-black.png';
                break;
            case 'Blue':
                imageNode.src = 'images/product-images/product3-blue.png';
                break;
            case 'Grey':
                imageNode.src = 'images/product-images/product3-grey.png';
                break;
            case 'Pink':
                imageNode.src = 'images/product-images/product3-pink.png';
                break;
       }
    }

   
}