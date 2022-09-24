import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ name, description, color, price, imageUrl, productId }) => {
	return (
		<Link to={`/product/${productId}`}>
			<div className="product">
				<img
					src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9a88bf75-6898-4633-9484-7a89e360da15/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-W4bTmP.png"
					alt="product-name"
				></img>
				<p className="product-name">Nike Air Max 90</p>
				<p className="product-description">
					Men's Waterproof Trail Running Shoes
				</p>
				<p className="product-color">2 Colors</p>
				<p className="product-price">{price}</p>
			</div>
		</Link>
	);
};

export default Product;
