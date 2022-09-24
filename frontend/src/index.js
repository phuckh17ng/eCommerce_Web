import React from "react";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);

reportWebVitals();
