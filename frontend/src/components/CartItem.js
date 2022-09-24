import React from "react";
import "./CartItem.css";

const CartItem = () => {
	return (
		<div className="cart-item">
			<div className="cart-item-info">
				<img
					src="https://secure-images.nike.com/is/image/DotCom/CW2288_111?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg"
					alt="1"
				></img>

				<div className="cart-item-info-description">
					<div className="cart-item-info-description-name">
						<p className="cart-item-name">Nike Air Force 1 '07</p>
						<p className="cart-item-price">$110.00</p>
					</div>
					<div className="cart-item-info-description-1">Men's Shoes</div>
					<div className="cart-item-info-description-2">White/White</div>
					<div className="cart-item-size-qty">
						<div className="cart-item-size">
							Size
							<select>
								<option>1</option>
								<option>1</option>
								<option>1</option>
							</select>
						</div>

						<div className="cart-item-qty">
							Quantity
							<select>
								<option>1</option>
								<option>1</option>
								<option>1</option>
							</select>
						</div>
					</div>
					<div className="cart-item-heart-trash">
						<img src={require("../image/Heart_02.png")} alt="heart"></img>
						<img src={require("../image/Bin_Empty.png")} alt="trash"></img>
					</div>
				</div>
			</div>

			<div className="cart-item-shipping">
				<div>Shipping</div>
				<div style={{ paddingBottom: "17px" }}>
					Arrives Tue, Sep 27 - Thu, Sep 29 Edit Location
				</div>
				<div>Free Pickup</div>
				<div>Find a Store</div>
			</div>
		</div>
	);
};

export default CartItem;
