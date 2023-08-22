import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { Product } from "./models/Product.js"

class ObservableAppState extends EventEmitter {
  money = 0

  products = [
    new Product({ name: 'Conk Soda', picture: 'https://ih1.redbubble.net/image.545844850.4767/st,small,507x507-pad,600x600,f8f8f8.u4.jpg', price: 1.25, quantity: 5 }),
    new Product({ name: 'bePis Soda', picture: 'https://i.redd.it/ygp3nhqmr9z01.jpg', price: 1.25, quantity: 12 }),
    new Product({ name: "Water Bottle", picture: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80', price: .75, quantity: 10 }),
    new Product({ name: "Chips", picture: 'https://th.bing.com/th/id/R.a4418a3191e29b4f9b0af2522d5b1045?rik=OV6xneIpognTeA&pid=ImgRaw&r=0', price: 2, quantity: 8 }),
    new Product({ name: "Apple", picture: 'https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', price: 1.55, quantity: 16 }),
    new Product({ name: "Banana", picture: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80', price: 1.55, quantity: 12 }),
    new Product({ name: "Shoe", picture: 'https://images.unsplash.com/photo-1561909848-977d0617f275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80', price: 15, quantity: 9 }),
    new Product({ name: "Cliff Bar", picture: 'https://images.unsplash.com/photo-1633360821154-1935fb5671e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', price: 1, quantity: 8 }),
    new Product({ name: "Fries", picture: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80', price: 2.25, quantity: 12 }),
  ]






  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
