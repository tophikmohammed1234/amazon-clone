import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Recommendation from "../Recommendation/Recommendation";

function LayOut({ children }) {
	return (
		<>
			<Header />
			{children}
			<Recommendation />
			<Footer />
		</>
	);
}

export default LayOut;
