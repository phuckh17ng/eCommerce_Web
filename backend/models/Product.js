const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	sex: {
		type: [String],
		required: true,
		enum: ["Men", "Women", "Kid"],
	},
	color: {
		type: Array,
		required: true,
	},
	size: {
		type: Array,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	countInStock: {
		type: Number,
		required: true,
	},
	imageUrl: {
		type: Array,
		required: true,
	},
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
