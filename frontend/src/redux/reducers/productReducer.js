import * as actionTypes from "../constants/productConstant";

export const getProductsReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS_REQUEST:
			return {
				loading: true,
				products: [],
			};

		case actionTypes.GET_PRODUCTS_SUCCESS:
			return {
				products: action.payload,
				loading: false,
			};

		case actionTypes.GET_PRODUCTS_FAIL:
			return {
				loading: true,
				error: action.error,
			};

		default:
			return state;
	}
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
			return {
				loading: true,
			};

		case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
			return {
				product: action.payload,
				loading: false,
			};

		case actionTypes.GET_PRODUCT_DETAIL_FAIL:
			return {
				loading: true,
				error: action.error,
			};

		case actionTypes.GET_PRODUCT_DETAIL_RESET:
			return {
				loading: true,
				product: {},
			};
		default:
			return state;
	}
};
