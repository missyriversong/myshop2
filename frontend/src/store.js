import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { productDetailReducer, productListReducer } from './reducers/productReducers.js'
import { cartReducer } from './reducers/cartReducers.js'


const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer
})

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {}
})

export default store