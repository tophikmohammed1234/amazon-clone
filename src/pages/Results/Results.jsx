import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../components/Loader/Loader";

function Results() {
	const [results, setResults] = useState([]);
	const [isLoading, setisLoading] = useState(false);
	const { categoryName } = useParams();

	useEffect(() => {
		setisLoading(true);
		axios
			.get(`${productUrl}/products/category/${categoryName}`)
			.then((res) => {
				setResults(res.data);
				setisLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setisLoading(true);
			});
	}, []);

	return (
		<LayOut>
			{isLoading ? (
				<Loader />
			) : (
				<section>
					<h1 style={{ padding: "30px" }}>Results</h1>
					<p style={{ padding: "30px" }}>category/{categoryName}</p>
					<hr />
					<div className={classes.products_container}>
						{results.map((product) => {
							return (
								<ProductCard
									key={product.id}
									product={product}
									renderAdd={true}
								/>
							);
						})}
					</div>
				</section>
			)}
		</LayOut>
	);
}

export default Results;
