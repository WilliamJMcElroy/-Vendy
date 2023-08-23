import { AppState } from "../AppState.js"

class ServiceProducts {

    collectMoney() {
        AppState.money += .25
    }

}
export const serviceProducts = new ServiceProducts()

