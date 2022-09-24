import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = ({ show, click }) => {
	const sideDrawerClass = ["sidedrawer"];

	if (show) {
		sideDrawerClass.push("show");
	}
	return (
		<div className={sideDrawerClass.join(" ")}>
			<ul className="sidedrawer-links" onClick={click}>
				<li>
					<Link
						to="/cart"
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
						}}
					>
						Cart
						<span className="cart-badge">0</span>
					</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;
