import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ click }) => {
	return (
		<nav className="navbar">
			<p className="navbar-brand">
				<Link to="/" style={{ textDecoration: "none", color: "white" }}>
					Shopping eCommerce
				</Link>
			</p>
			<ul className="navbar-links">
				<li>
					<Link to="/about" className="navbar-link-item">
						About
					</Link>
				</li>
				<li>
					<Link to="/contact" className="navbar-link-item">
						Contact
					</Link>
				</li>
				<li>
					<Link to="/login" className="navbar-link-item">
						Login
					</Link>
				</li>
				<li>
					<Link to="/cart" className="navbar-link-item">
						Cart
						<span>0</span>
					</Link>
				</li>
			</ul>
			<div className="hamburger-menu" onClick={click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
};

export default Navbar;
