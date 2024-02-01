import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { productDetailReducer, productListReducer } from './reducers/productReducers.js'
import { cartReducer } from './reducers/cartReducers.js'


const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
  cart: {cartItems: cartItemsFromStorage}
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState   //dont make this object, don't load
})

export default store