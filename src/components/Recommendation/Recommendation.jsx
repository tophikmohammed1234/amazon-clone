import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Recommendation.module.css";
import { DataContext } from "../DataProvider/DataProvider";

function Recommendation() {
	const [{ user }] = useContext(DataContext);
	return (
		<div className={classes.recommendation}>
			{!user && (
				<>
					<h4>See personalized recommendations</h4>
					<Link to="/auth">
						<button type="button">{user ? "Logout" : "Sign In"}</button>
					</Link>
					<h5>
						New customer? <Link to="/auth">Start here</Link>
					</h5>
				</>
			)}
		</div>
	);
}

export default Recommendation;
