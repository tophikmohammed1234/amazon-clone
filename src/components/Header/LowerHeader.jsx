import React from 'react'
import { TiThMenu } from "react-icons/ti";
import classes from "./Header.module.css";


function LowerHeader() {
  return (
		<div className={classes.lower__container}>
			<ul>
				<li>
					<TiThMenu />
					<p>All</p>
				</li>
				<li>Today's Deals</li>
				<li>Costumer Services</li>
				<li>Registry</li>
				<li>Gift Card</li>
				<li>Sell</li>
			</ul>
		</div>
	);
}

export default LowerHeader
