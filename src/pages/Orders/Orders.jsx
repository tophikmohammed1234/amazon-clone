import React, { useContext, useEffect, useState } from "react";
import classes from "./Orders.module.css";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import LayOut from "../../components/Layout/Layout";
import { collection, doc, orderBy, onSnapshot } from "firebase/firestore";
import ProductCard from "../../Product/ProductCard";

function Orders() {
	const [{ user }, dispatch] = useContext(DataContext);
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) => {
					setOrders(
						snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
					);
				});
		} else {
			setOrders([]);
		}
	}, [user]);
	return (
		<LayOut>
			<section className={classes.container}>
				<div className={classes.orders__container}>
					<h2>Your Orders</h2>
					{orders?.length == 0 && (
						<div style={{ padding: "20px" }}>You don't have orders yet.</div>
					)}
					{/* ordered items */}
					<div>
						{orders?.map((eachOrder, i) => {
							return (
								<div key={i}>
									<hr />
									<p>Order ID:{eachOrder?.id}</p>
									{eachOrder?.data?.basket?.map((order) => {
										return (
											<ProductCard flex={true} product={order} key={order.id} />
										);
									})}
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</LayOut>
	);
}

export default Orders;
