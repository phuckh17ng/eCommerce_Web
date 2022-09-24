import React, { useEffect } from "react";
import Product from "../components/Product";
import "./HomeScreen.css";

import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productAction";

const HomeScreen = () => {
	const dispatch = useDispatch();

	const getProducts = useSelector((state) => state.getProducts);
	const { products, loading, error } = getProducts;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div className="homescreen">
			<div className="homescreen-product">
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
};

export default HomeScreen;
