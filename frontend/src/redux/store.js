import {
	applyMiddleware,
	combineReducers,
	configureStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { cartReducer } from "./reducers/cartReducer";
import {
	getProductDetailsReducer,
	getProductsReducer,
} from "./reducers/productReducer";

let reducers = combineReducers({
	cart: cartReducer,
	getProducts: getProductsReducer,
	getProductDetailsReducer: getProductDetailsReducer,
});

const middleware = [thunk];

const store = configureStore(
	{ reducer: reducers },
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
