import React, { useContext } from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";
import { Type } from "../../Utility/action.type";

function Header() {
	const [{ basket, user }, dispatch] = useContext(DataContext);

	const totalItem = basket?.reduce((amount, item) => {
		return item.amount + amount;
	}, 0);

	const handleSignOut = () => {
		auth
			.signOut()
			.then(() => {
				dispatch({
					type: Type.SET_USER,
					user: null,
				});
			})
			.catch((error) => {
				alert("Error signing out: ", error);
			});
	};

	return (
		<section className={classes.fixed}>
			<section>
				<div className={classes.header__container}>
					<div className={classes.logo__container}>
						{/* {logo} */}
						<Link to="/">
							<img
								src={"https://pngimg.com/uploads/amazon/amazon_PNG11.png"}
								alt="amazon logo"
							/>
						</Link>
						{/* {delivery} */}
						<div className={classes.delivery}>
							<span>
								<SlLocationPin />
							</span>
							<div>
								<p>Deliver to</p>
								<span>Ethiopia</span>
							</div>
						</div>
					</div>
					<div className={classes.search}>
						{/* {search} */}
						<select name="" id="">
							<option value="">All</option>
						</select>
						<input type="text" name="" id="" placeholder="search product" />
						<BiSearch size={38} />
					</div>
					{/* {right side link} */}
					<div className={classes.order__container}>
						<Link to="" className={classes.language}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
								alt="united states flag"
							/>
							<select>
								<option value="">EN</option>
							</select>
						</Link>
						{/* {three components} */}
						<Link to={!user && "/auth"}>
							<div>
								{user ? (
									<>
										<p>Hello, {user?.email?.split("@")[0]}</p>
										<span onClick={handleSignOut}>Sign Out</span>
									</>
								) : (
									<>
										<p> Hello, Sign In</p>
										<span>Account and Lists</span>
									</>
								)}
							</div>
						</Link>
						{/* {orders} */}
						<Link to="/orders">
							<p>Returns</p>
							<span>& Orders</span>
						</Link>
						{/* {cart} */}
						<Link to="/cart" className={classes.cart}>
							<BiCart size={35} />
							<span>{totalItem}</span>
						</Link>
					</div>
				</div>
			</section>
			<LowerHeader />
		</section>
	);
}

export default Header;
