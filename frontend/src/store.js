import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { productDetailReducer, productListReducer } from './reducers/productReducers.js'
import { cartReducer } from './reducers/cartReducers.js'
import { userLoginReducer } from './reducers/userReducers.js'


const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer, 
  userLogin: userLoginReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
  cart: {cartItems: cartItemsFromStorage}, 
  userLogin: {userInfo: userInfoFromStorage}
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState   //dont make this object, don't load
})

export default store