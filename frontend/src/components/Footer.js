import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-accordion-group">
				<div className="accordion-group">
					<div className="accordion-group-1">
						<ul>
							<li>GIFT CARDS</li>
							<li>PROMOTIONS</li>
							<li>FIND A STORE</li>
							<li>SIGN UP FOR EMAIL</li>
							<li>BECOME A MEMBER</li>
							<li>NIKE JOURNAL</li>
							<li>SEND US FEEDBACK</li>
						</ul>
					</div>
					<div className="accordion-group-2">
						<ul>
							<li
								style={{ fontSize: "13px", fontWeight: "bold", color: "#fff" }}
							>
								GET HELP
							</li>
							<li>Order Status</li>
							<li>Shipping and Delivery</li>
							<li>Returns</li>
							<li>Payment Options</li>
							<li>Gift Card Balance</li>
							<li>Contact Us</li>
						</ul>
					</div>
					<div className="accordion-group-3">
						<ul>
							<li
								style={{ fontSize: "13px", fontWeight: "bold", color: "#fff" }}
							>
								ABOUT NIKE
							</li>
							<li>News</li>
							<li>Careers</li>
							<li>Investors</li>
							<li>Purpose</li>
							<li>Sustainability</li>
						</ul>
					</div>
				</div>

				<div className="contact-group">
					<div className="twitter">
						<img src={require("../image/Twitter.png")} alt="twitter"></img>
					</div>
					<div className="facebook">
						<img src={require("../image/Facebook.png")} alt="facebook"></img>
					</div>
					<div className="youtube">
						<img src={require("../image/Youtube.png")} alt="youtube"></img>
					</div>
					<div className="instagram">
						<img src={require("../image/Instagram.png")} alt="insta"></img>
					</div>
				</div>
			</div>

			<div className="footer-temp-group">
				<div className="footer-temp-group-1">
					United States © 2022 Nike, Inc. All Rights Reserved
				</div>
				<div className="footer-temp-group-2">
					<ul>
						<li>Guides</li>
						<li>Terms of Sale</li>
						<li>Terms of Use</li>
						<li>Nike Privacy Policy</li>
						<li>CA Supply Chains Act</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
