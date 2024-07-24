import React, { useState, useEffect } from "react";
import LayOut from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
	const [product, setProduct] = useState([]);
	const [isLoading, setisLoading] = useState(false);
	const { productId } = useParams();
	useEffect(() => {
		setisLoading(true);
		axios
			.get(`${productUrl}/products/${productId}`)
			.then((res) => {
				setProduct(res.data);
				setisLoading(false);
			})
			.catch(() => {
				console.error();
				setisLoading(false);
			});
	}, [productId]);

	return (
		<LayOut>
			{isLoading ? (
				<Loader />
			) : (
				<ProductCard
					product={product}
					flex={true}
					renderDesc={true}
					renderAdd={true}
				/>
			)}
		</LayOut>
	);
}

export default ProductDetail;
