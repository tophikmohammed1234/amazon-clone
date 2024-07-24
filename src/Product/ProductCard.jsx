import React, { useContext } from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../components/CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../components/DataProvider/DataProvider";
import { Type } from "../Utility/action.type";

function ProductCard({ product, flex, renderDesc,renderAdd }) {
	const { image, title, rating = {}, price, id, description } = product;

	const [state, dispatch] = useContext(DataContext);

	const addToCart = () => {
		dispatch({
			type: Type.ADD_TO_BASKET,
			item: {
				image,
				title,
				rating,
				price,
				id,
				description,
			},
		});
	};

	return (
		<div
			className={`${classes.card__container} ${
				flex ? classes.product__flexed : ""
			}`}
		>
			<Link to={`/products/${id}`}>
				<img src={image} alt={title} />
			</Link>
			<div>
				<h3>{title}</h3>
				{renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
				<div className={classes.rating}>
					{/* Conditionally render rating component */}
					{rating.rate !== undefined ? (
						<>
							<Rating value={rating.rate} precision={0.5} />
							<small>{rating.count}</small>
						</>
					) : (
						<span>No rating available</span>
					)}
				</div>
				<div>
					{/* {price} */}
					<CurrencyFormat amount={price} />
				</div>
				{renderAdd && (
					<button className={classes.button} onClick={addToCart}>
						add to cart
					</button>
				)}
			</div>
		</div>
	);
}

export default ProductCard;
