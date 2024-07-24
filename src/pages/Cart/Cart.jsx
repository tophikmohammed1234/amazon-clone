import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../components/Layout/Layout";
import ProductCard from "../../Product/ProductCard";
import { DataContext } from "../../components/DataProvider/DataProvider";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Cart() {
	const [{ basket, user }, dispatch] = useContext(DataContext);

	const total = basket.reduce(
		(amount, item) => item.price * item.amount + amount,
		0
	);

	const increment = (item) => {
		dispatch({
			type: Type.ADD_TO_BASKET,
			item,
		});
	};

	const decrement = (id) => {
		dispatch({
			type: Type.REMOVE_FROM_BASKET,
			id,
		});
	};

	return (
		<LayOut>
			<section className={classes.container}>
				<div className={classes.cart__container}>
					<h2>Hello, {user?.email?.split("@")[0]}</h2>
					<h3>Your Shopping Basket</h3>
					<hr />
					{basket.length === 0 ? (
						<p>Oops! No items in your cart.</p>
					) : (
						basket.map((item) => (
							<div key={item.id} className={classes.cart_product}>
								<ProductCard
									product={item}
									renderDesc={true}
									flex={true}
									renderAdd={false}
								/>
								<div className={classes.btn_container}>
									<button
										className={classes.btn}
										onClick={() => increment(item)}
									>
										<IoIosArrowUp size={25} />
									</button>
									<span>{item.amount}</span>
									<button
										className={classes.btn}
										onClick={() => decrement(item.id)}
									>
										<IoIosArrowDown size={25} />
									</button>
								</div>
							</div>
						))
					)}
				</div>
				{basket.length !== 0 && (
					<div className={classes.subtotal}>
						<div>
							<p>Subtotal ({basket.length} items)</p>
							<CurrencyFormat amount={total} />
						</div>
						<span>
							<input type="checkbox" />
							<small>This order contains a gift</small>
						</span>
						<Link to="/payments">Continue to Checkout</Link>
					</div>
				)}
			</section>
		</LayOut>
	);
}

export default Cart;
