import React, { useState } from "react";
import { Link } from "react-router-dom";
import Size from "../components/ProductSize";
import "./ProductScreen.css";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./SlideImage.module.css";

const slideImages = [
	"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9a88bf75-6898-4633-9484-7a89e360da15/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-W4bTmP.png",
	"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f859bb67-e653-4d12-850f-0d0e741a0d28/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-W4bTmP.png",
];
const ProductScreen = () => {
	const [showShipping, setShowShipping] = useState(false);
	const [showReview, setShowReview] = useState(false);

	return (
		<div className="productscreen">
			<div className="mobile-productscreen-info-container">
				<p className="productscreen-name" style={{ marginTop: "-40px" }}>
					Nike Air Max 90
				</p>
				<p className="productscreen-description">
					Men's Waterproof Trail Running Shoes
				</p>
				<p className="productscreen-color">2 Colors</p>
				<p className="productscreen-price">$160</p>
			</div>
			<div className={styles.container}>
				<Slide>
					{slideImages.map((slide, index) => {
						return (
							<div className={styles.slide} key={slide}>
								<div
									style={{ backgroundImage: `url(${slideImages[index]})` }}
								></div>
							</div>
						);
					})}
				</Slide>
			</div>
			<div className="productscreen-img">
				<button className="moblie-btn-switch-img-left">
					<div className="moblie-btn-switch-icon-left">
						<img src={require("../image/Vector (19).png")} alt="vector"></img>
					</div>
				</button>

				<div className="img-container">
					<img
						src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9a88bf75-6898-4633-9484-7a89e360da15/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-W4bTmP.png"
						alt="product-name"
					></img>
					<img
						alt="product-name"
						src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f859bb67-e653-4d12-850f-0d0e741a0d28/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-W4bTmP.png"
					></img>
					<img
						alt="product-name"
						src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f859bb67-e653-4d12-850f-0d0e741a0d28/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-W4bTmP.png"
					></img>
					<img
						alt="product-name"
						src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f859bb67-e653-4d12-850f-0d0e741a0d28/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-W4bTmP.png"
					></img>
					<img
						alt="product-name"
						src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f859bb67-e653-4d12-850f-0d0e741a0d28/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-W4bTmP.png"
					></img>
					<img
						alt="product-name"
						src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f859bb67-e653-4d12-850f-0d0e741a0d28/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-W4bTmP.png"
					></img>
				</div>
				<button className="moblie-btn-switch-img-right">
					<div className="moblie-btn-switch-icon-right">
						<img src={require("../image/Vector (19).png")} alt="vector"></img>
					</div>
				</button>
			</div>
			<div className="productscreen-info">
				<div className="productscreen-info-container">
					<p className="productscreen-name">Nike Air Max 90</p>
					<p className="productscreen-description">
						Men's Waterproof Trail Running Shoes
					</p>
					<p className="productscreen-color">2 Colors</p>
					<p className="productscreen-price">$160</p>
				</div>

				<img
					src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/4d0427f9-5ffd-4b6d-b305-5584bd1e274b/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-W4bTmP.png"
					alt="product-name"
				></img>
				<img
					alt="product-name"
					src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/357cf26a-26a1-4ff0-8cde-d46249051eff/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-W4bTmP.png"
				></img>

				<div className="product-size">
					<p className="size-select">Select Size</p>
					<p className="size-guide">Size Guide</p>
				</div>

				<div className="product-size-select">
					<Size />
					<Size />
					<Size />
					<Size />
					<Size />
					<Size />
					<Size />
					<Size />
					<Size />
					<Size />
					<Size />
				</div>

				<div className="add-to-bag">
					<button className="add-to-bag-btn">Add to Bag</button>
					<button className="favorite-btn">Favorite</button>
				</div>

				<div className="product-description-preview">
					<p>
						The Nike React Pegasus Trail 4 GORE-TEX is your running companion
						for those days when the weather turns. Its waterproof GORE-TEX layer
						helps keep your feet dry, and less rubber in the outsole creates a
						smooth transition from road to trail without breaking stride.
					</p>
					<ul>
						<li>Shown: Barely Grape/Barely Green/Yellow Strike/Total Orange</li>
						<li>Style: DJ7926-500</li>
					</ul>

					<Link to="#">View Product Details</Link>
				</div>

				<div className="productscreen-policy">
					<div
						className="product-shipping-return"
						onClick={() => setShowShipping(!showShipping)}
					>
						<div className="product-review-title">
							<p>Free Shipping & Returns</p>
							<img
								src={require("../image/Vector (31).png")}
								alt="Vector-downarrow"
								className={showShipping ? "uparrow" : null}
							></img>
						</div>

						<div
							className={
								showShipping
									? "show-product-shipping-return-policy"
									: "product-shipping-return-policy"
							}
						>
							<p>
								Free standard shipping and free 60-day returns for Nike Members.
								Learn more. Return policy exclusions apply.
							</p>
							<p style={{ paddingTop: "20px" }}>
								Pick-up available at select Nike Stores.
							</p>
						</div>
					</div>
					<div
						className="product-review"
						onClick={() => setShowReview(!showReview)}
					>
						<div className="product-review-title">
							<p>
								Reviews <span>(0)</span>
							</p>

							<img
								src={require("../image/Vector (31).png")}
								alt="Vector-downarrow"
								className={showReview ? "uparrow" : null}
							></img>
						</div>

						<div className={showReview ? "show-review" : "review"}>
							<p>
								Free standard shipping and free 60-day returns for Nike Members.
								Learn more. Return policy exclusions apply.
							</p>
							<p style={{ paddingTop: "20px" }}>
								Pick-up available at select Nike Stores.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductScreen;
