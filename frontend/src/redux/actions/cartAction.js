import axios from "axios";
import * as actionTypes from "../constants/cartConstant";

export const addToCart = (id) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/products/${id}`);
	dispatch({
		type: actionTypes.ADD_TO_CART,
		payload: {
			product: data._id,
			name: data.name,
			sex: data.sex,
			size: data.size,
			price: data.price,
			qty: data.countInStock,
			description: data.description,
			imageURL: data.imageURL[0],
		},
	});

	localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
	dispatch({
		type: actionTypes.REMOVE_FROM_CART,
		payload: id,
	});
	localStorage.removeItem("cart", JSON.stringify(getState().cart.cartItems));
};
