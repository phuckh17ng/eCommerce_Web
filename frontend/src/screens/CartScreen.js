import React, { useState } from "react";
import CartItem from "../components/CartItem";
import "./CartScreen.css";

const CartScreen = () => {
	const [inputPromoCode, setInputPromoCode] = useState(false);
	return (
		<div className="cart">
			<div className="cartscreen">
				<div className="cart-bag-screen">
					<div className="free-shipping-for-member">
						<p className="free-shipping-for-member-title">
							Free Shipping for Members
						</p>
						<p className="free-shipping-for-member-signin">
							Become a Nike Member for fast and free shipping. Join us or
							Sign-in
						</p>
					</div>
					<div className="cart-bag">
						<p>Bag</p>
						<ul>
							<li style={{ color: "#757575" }}>2 Items</li>
							<li style={{ color: "#757575" }}>|</li>
							<li>$197.00</li>
						</ul>
					</div>
					<div style={{ order: "3" }}>
						{" "}
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
					</div>
				</div>

				<div className="cart-summary-screen">
					<p>Summary</p>

					<div
						className="promo-code"
						onClick={() => setInputPromoCode(!inputPromoCode)}
					>
						<p>Do you have a Promo Code?</p>
						<img src={require("../image/Vector (31).png")} alt="1"></img>
					</div>
					<div
						className={inputPromoCode ? "promo-code-screen" : "inputPromoCode"}
					>
						<input></input>
						<button>Apply</button>
					</div>

					<div className="cart-summary-screen-subtotal">
						<p>Subtotal</p>
						<p>$110.00</p>
					</div>
					<div className="cart-summary-screen-shipping">
						<p>Estimated Shipping & Handling</p>
						<p>$7.00</p>
					</div>
					<div className="cart-summary-screen-subtotal">
						<p>Estimated Tax</p>
						<p>—</p>
					</div>
					<div className="cart-summary-screen-total">
						<p>Total</p>
						<p>$117.00</p>
					</div>

					<div class="pay-btn">
						<button className="btn-checkout">Checkout</button>
						<button className="btn-paypal">
							<img src={require("../image/paypal@2x.png")} alt="1"></img>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartScreen;
