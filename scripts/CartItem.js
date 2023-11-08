class CartItem {
    constructor(model, price, color, quantity) {
        this._model = model;
        this._price = price;
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