import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";

import AboutScreen from "./screens/AboutScreen.js";
import CartScreen from "./screens/CartScreen.js";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
	const [sideToggle, setSideToggle] = useState(false);
	return (
		<Router>
			<Navbar click={() => setSideToggle(true)} />
			<Backdrop show={sideToggle} click={() => setSideToggle(false)} />
			<SideDrawer show={sideToggle} click={() => setSideToggle(false)} />

			<main>
				<Routes>
					<Route exact path="/about" element={<AboutScreen />} />
					<Route exact path="/cart" element={<CartScreen />} />
					<Route exact path="/contact" element={<ContactScreen />} />
					<Route exact path="/" element={<HomeScreen />} />
					<Route exact path="/product/:id" element={<ProductScreen />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
