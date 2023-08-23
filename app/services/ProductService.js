import { AppState } from "../AppState.js"

class ServiceProducts {

    collectMoney() {
        AppState.money++
    }

}
export const serviceProducts = new ServiceProducts()

