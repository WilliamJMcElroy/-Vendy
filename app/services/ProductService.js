import { AppState } from "../AppState.js"

class serviceProducts {

    collectMoney() {
        AppState.money++
    }

    export const serviceProducts = new serviceProducts()
}

