class CartItem {
    constructor(model, price, image, color, quantity) {
        this._model = model;
        this._price = price;
        this._image = image;
        this._color = color;
        this._quantity = quantity;
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    get image() {
        return this._image;
    }

    set image(mewImage) {
        this._image = newImage;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        this._color = newColor;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(newQuantity) {
        this._quantity = newQuantity;
    }
}