import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../components/Loader/Loader";

function Product() {
	const [Products, setProducts] = useState([]);
	const [isLoading, setisLoading] = useState(false);

	useEffect(() => {
		setisLoading(true);
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => {
				setProducts(res.data);
				setisLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setisLoading(true);
			});
	}, []);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<section className={classes.product__container}>
					{Products?.map((singleProduct) => {
						return (
							<ProductCard
								product={singleProduct}
								key={singleProduct.id}
								renderAdd={true}
							/>
						);
					})}
				</section>
			)}
		</>
	);
}

export default Product;
