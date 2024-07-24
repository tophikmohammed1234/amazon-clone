import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import { Type } from "../../Utility/action.type";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { ClipLoader } from "react-spinners";

function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [{ user }, dispatch] = useContext(DataContext);
	const [loading, setLoading] = useState({
		signIn: false,
		signUp: false,
	});
	const navigate = useNavigate();
	const navStateData = useLocation();

	const authHandler = (e) => {
		e.preventDefault();
		if (e.target.name === "signin") {
			setLoading({ ...loading, signIn: true });
			signInWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					dispatch({
						type: Type.SET_USER,
						user: userInfo.user,
					});
					setLoading({ ...loading, signIn: false });
					navigate(navStateData?.state?.redirect || "/");
				})
				.catch((err) => {
					setError(err.message);
					setLoading({ ...loading, signIn: false });
				});
		} else {
			setLoading({ ...loading, signUp: true });
			createUserWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					dispatch({
						type: Type.SET_USER,
						user: userInfo.user,
					});
					setLoading({ ...loading, signUp: false });
					navigate(navStateData?.state?.redirect || "/");
				})
				.catch((err) => {
					setError(err.message);
					setLoading({ ...loading, signUp: false });
				});
		}
	};

	return (
		<section className={classes.login}>
			{/* logo */}
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
					alt="amazon logo"
				/>
			</Link>
			{/* form */}
			<div className={classes.login__container}>
				<h1>Sign In</h1>
				{
					<small
						style={{
							padding: "5px",
							textAlign: "center",
							color: "red",
							fontWeight: "bold",
						}}
					>
						{navStateData?.state?.msg}
					</small>
				}
				<form>
					<div>
						<label htmlFor="email">Email</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							id="email"
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
						/>
					</div>
					<button
						onClick={authHandler}
						type="submit"
						className={classes.login__signinButton}
						name="signin"
					>
						{loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
					</button>
				</form>
				{/* agreement */}
				<p>
					By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
					Sale. Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>
				{/* create account button */}
				<button
					type="submit"
					name="signup"
					className={classes.login__registerButton}
					onClick={authHandler}
				>
					{loading.signUp ? (
						<ClipLoader color="#000" size={15} />
					) : (
						"Create your Amazon Account"
					)}
				</button>
				{error && (
					<small
						style={{
							padding: "10px",
							color: "white",
							border: "2px solid red",
							backgroundColor: "#D32F2F",
							textAlign: "center",
						}}
					>
						{error}
					</small>
				)}
			</div>
		</section>
	);
}

export default Auth;
