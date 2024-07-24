import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
	"pk_test_51PfdWfCQxZLjmR5xdnTvjBlCAPa9ZPN5Bm4xpnlAjAMp6PBvlhszR5Bkm3xgAa9JGYoC4fYgh9SHUubAodrabAui00FIlPMUrL"
);

function Routing() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/auth" element={<Auth />} />
				<Route
					path="/payments"
					element={
						<ProtectedRoute
							msg={"You have to login in order to pay!"}
							redirect={"/payments"}
						>
							<Elements stripe={stripePromise}>
								<Payment />
							</Elements>
						</ProtectedRoute>
					}
				/>
				<Route
					path="/orders"
					element={
						<ProtectedRoute
							msg={"You have to login in order to get your order!"}
							redirect={"/orders"}
						>
							<Elements stripe={stripePromise}>
								<Orders />
							</Elements>
						</ProtectedRoute>
					}
				/>
				<Route path="/cart" element={<Cart />} />
				<Route path="/category/:categoryName" element={<Results />} />
				<Route path="/products/:productId" element={<ProductDetail />} />
			</Routes>
		</Router>
	);
}

export default Routing;
