import React, { useContext, useState } from "react";
import classes from "./payment.module.css";
import LayOut from "../../components/Layout/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";

function Payment() {
	const [{ basket, user }, dispatch] = useContext(DataContext);
	const [cardError, setCardError] = useState(null);
	const [processing, setProcessing] = useState(false);
	const total = basket.reduce(
		(amount, item) => item.price * item.amount + amount,
		0
	);

	const totalItem = basket?.reduce((amount, item) => {
		return item.amount + amount;
	}, 0);
	const stripe = useStripe();
	const elements = useElements();

	const navigate = useNavigate();

	const handleChange = (e) => {
		e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
	};

	const handlePayment = async (e) => {
		e.preventDefault();
		try {
			setProcessing(true);
			const response = await axiosInstance({
				method: "POST",
				url: `/payment/create?total=${total * 100}`,
			});
			const clientSecret = response.data?.clientSecret;

			const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			});

			await db
				.collection("users")
				.doc(user.uid)
				.collection("orders")
				.doc(paymentIntent.id)
				.set({
					basket: basket,
					amount: paymentIntent.amount,
					created: paymentIntent.created,
				});

			dispatch({ type: Type.EMPTY_BASKET });

			setProcessing(false);
			navigate("/orders", { state: { msg: "you have placed new order" } });
		} catch (error) {
			console.error("Payment failed:", error);
			setCardError("Payment failed, please try again.");
			setProcessing(false);
		}
	};

	return (
		<LayOut>
			{/* header */}
			<div className={classes.payment__header}>Checkout {totalItem} items</div>
			{/* payment method */}
			<section className={classes.payment}>
				{/* address */}
				<div className={classes.flex}>
					<h3>Delivery Address</h3>
					<div>
						<div>{user?.email}</div>
						<div>123 React Lane</div>
						<div>Chicago, IL</div>
					</div>
				</div>
				<hr />
				{/* product */}
				<div className={classes.flex}>
					<h3>Review items and Delivery</h3>
					<div>
						{basket.map((item) => (
							<ProductCard product={item} flex={true} key={item.id} />
						))}
					</div>
				</div>
				<hr />
				{/* card form */}
				<div className={classes.flex}>
					<h3>Payment methods</h3>
					<div className={classes.payment__card__container}>
						<div className={classes.payment__details}>
							<form onSubmit={handlePayment}>
								{/* error */}
								{cardError && (
									<small
										style={{
											color: "red",
										}}
									>
										{/* card element */}
										{cardError}
									</small>
								)}
								<CardElement onChange={handleChange} />

								{/* price */}
								<div className={classes.payment__price}>
									<div>
										<span style={{ display: "flex", gap: "10px" }}>
											<p>Total Order</p> | <CurrencyFormat amount={total} />
										</span>
									</div>
									<button type="submit">
										{processing ? (
											<div className={classes.loading}>
												<ClipLoader color="gray" size={12} />
												<p>please wait ...</p>
											</div>
										) : (
											"Pay Now"
										)}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</LayOut>
	);
}

export default Payment;
