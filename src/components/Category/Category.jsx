import React from "react";
import { categoryInfos } from "./CategoryFullInfo.js";
import CategoryCard from "./CategoryCard.jsx";
import classes from "./category.module.css";

function Category() {
	return (
		<section className={classes.category__container}>
			{categoryInfos.map((infos, i) => (
				<CategoryCard data={infos} key={i} />
			))}
		</section>
	);
}

export default Category;
