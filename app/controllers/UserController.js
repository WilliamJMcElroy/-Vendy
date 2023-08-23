import { AppState } from "../AppState.js";
import { Product } from "../models/Product.js";
import { setHTML, setText } from "../utils/Writer.js";
import { serviceProducts } from "../services/ProductService.js";

export class UserController {

    constructor() {
        this.drawProducts()
        console.log('user controller loaded')


        AppState.on(AppState.money, this.drawMoney)
    }

    drawMoney() {
        setText('cash', AppState.money)
    }


    drawProducts() {
        console.log('daring')
        const products = AppState.products
        let listContent = ''
        products.forEach(p => listContent += p.cardTemplate)
        setHTML('my-products', listContent)
    }

    addQuarter() {
        serviceProducts.collectMoney()
        console.log('added quarter')
    }
}
