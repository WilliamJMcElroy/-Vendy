export class Product {
    constructor({ name, picture, price, quantity }) {
        this.name = name
        this.picture = picture
        this.price = price
        this.quantity = quantity
    }
    get cardTemplate() {
        return `
        <div class="col-12 col-md-3 justify-content-center">
        <p> ${this.name}</p>
            <img class="resizeImg" src="${this.picture}" class="img-fluid/>, ${this.price} ${this.quantity}
            <button class="btn col-12 col-md-3" role="button" onclick="app.UserController.addQuarter()">Add Quarter</button>
            </div>
    `
    }
}
