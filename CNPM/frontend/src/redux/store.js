import  {configureStore,combineReducers,applyMiddleware} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension' 

import {cartReducer} from './reducers/cartReducers'
import {getProductDetailsReducer,getProductsReducer} from './reducers/productReducers'

let reducers = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
})

const middleware=[thunk];

const store = configureStore(
    {reducer:reducers}, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;