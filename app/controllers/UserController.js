import { AppState } from "../AppState.js";
import { Product } from "../models/Product.js";
import { setHTML } from "../utils/Writer.js";

export class UserController {

    constructor() {
        this.drawProducts()

    }

    drawProducts() {
        console.log('daring')
        const products = AppState.products
        let listContent = ''
        products.forEach(p => listContent += p.cardTemplate)
        setHTML('my-products', listContent)
    }

    addQuarter() {

        console.log('added quarter')
    }
}
