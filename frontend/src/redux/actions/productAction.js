import axios from "axios";
import * as actionTypes from "../constants/productConstant";

export const getProducts = () => async (dispatch) => {
	try {
		//dispatch = gui di = send action
		dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

		const { data } = await axios.get("/api/products");

		dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCTS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getProductDetail = (id) => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_REQUEST });

		const { data } = await axios.get(`/api/products/${id}`);

		dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCT_DETAIL_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
