import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./components/DataProvider/DataProvider.jsx";
import { initialState, reducer } from "./Utility/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<DataProvider reducer={reducer} initialState={initialState}>
			<App />
		</DataProvider>
	</>
);
