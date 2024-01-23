import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { productDetailReducer, productListReducer } from './reducers/productReducers.js'


const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer
})

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {}
})

export default store