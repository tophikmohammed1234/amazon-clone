import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<>
			<section>
				<span
					className={classes.navigator_to_the_top}
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				>
					Back to top
				</span>
			</section>
			<footer>
				<section className={classes.footer_top}>
					<div className={classes.footer_column}>
						<h3>Get to Know Us</h3>
						<ul>
							<li>
								<a href="">Careers</a>
							</li>
							<li>
								<a href="">Blog</a>
							</li>
							<li>
								<a href="">About Amazon</a>
							</li>
							<li>
								<a href="">Investor Relations</a>
							</li>
							<li>
								<a href="">Amazon Devices</a>
							</li>
							<li>
								<a href="">Amazon Science</a>
							</li>
						</ul>
					</div>
					<div className={classes.footer_column}>
						<h3>Make Money with Us</h3>
						<ul>
							<li>
								<a href="">Sell products on Amazon</a>
							</li>
							<li>
								<a href="">Sell on Amazon Business</a>
							</li>
							<li>
								<a href="">Sell apps on Amazon</a>
							</li>
							<li>
								<a href="">Become an Affiliate</a>
							</li>
							<li>
								<a href="">Advertise Your Products</a>
							</li>
							<li>
								<a href="">Self-Publish with Us</a>
							</li>
							<li>
								<a href="">Host an Amazon Hub</a>
							</li>
							<li>
								<a href="">›See More Make Money with Us</a>
							</li>
						</ul>
					</div>
					<div className={classes.footer_column}>
						<h3>Amazon Payment Products</h3>
						<ul>
							<li>
								<a href="">Amazon Business Card</a>
							</li>
							<li>
								<a href="">Shop with Points</a>
							</li>
							<li>
								<a href="">Reload Your Balance</a>
							</li>
							<li>
								<a href="">Amazon Currency Converter</a>
							</li>
						</ul>
					</div>
					<div className={classes.footer_column}>
						<h3>Let Us Help You</h3>
						<ul>
							<li>
								<a href="">Amazon and COVID-19</a>
							</li>
							<li>
								<a href="">Your Account</a>
							</li>
							<li>
								<a href="">Your Orders</a>
							</li>
							<li>
								<a href="">Shipping Rates & Policies</a>
							</li>
							<li>
								<a href="">Returns & Replacements</a>
							</li>
							<li>
								<a href="">Manage Your Content and Devices</a>
							</li>
							<li>
								<a href="">Help</a>
							</li>
						</ul>
					</div>
					<div className={classes.footer__middle}>
						<Link to="/" className={classes.logo__container}>
							<img
								src={"https://pngimg.com/uploads/amazon/amazon_PNG11.png"}
								alt="amazon logo"
							/>
						</Link>
						<select>
							<option value="en">English</option>
						</select>
						<p className={classes.money}>$ USD - U.S. Dollar</p>
						<span className={classes.flag}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
								alt="united states flag"
								width="20px"
							/>
							<p>United States</p>
						</span>
					</div>
				</section>

				<section className={classes.footer_bottom}>
					<div className={classes.footer__column}>
						<a href="#">
							<h3>Amazon Music</h3>
							<p>
								Stream millions <br />
								of songs
							</p>
						</a>
						<a href="#">
							<h3>AmazonGlobal</h3>
							<p>
								Ship Orders <br />
								Internationally
							</p>
						</a>
						<a href="#">
							<h3>IMDbPro</h3>
							<p>
								Get Info <br />
								Entertainment <br /> Professionals <br />
								Need
							</p>
						</a>
					</div>
					<div className={classes.footer__column}>
						<a href="#">
							<h3>Amazon Ads</h3>
							<p>
								Reach customers <br /> wherever they <br />
								spend their time
							</p>
						</a>
						<a href="#">
							<h3>Home Services</h3>
							<p>
								Experienced Pros <br /> Happiness <br />
								Guarantee
							</p>
						</a>
						<a href="#">
							<h3>
								Kindle Direct <br /> Publishing
							</h3>
							<p>
								Indie Digital & <br />
								Print Publishing <br /> Made Easy
							</p>
						</a>
						<a href="#">
							<h3>eero WiFi</h3>
							<p>
								Stream 4K Video <br />
								in Every Room
							</p>
						</a>
					</div>
					<div className={classes.footer__column}>
						<a href="#">
							<h3>6pm</h3>
							<p>
								Score deals <br /> on fashion <br />
								brands
							</p>
						</a>
						<a href="#">
							<h3>
								Amazon Web <br />
								Services{" "}
							</h3>
							<p>
								Scalable Cloud <br />
								Computing <br />
								Services
							</p>
						</a>
						<a href="#">
							<h3>
								Prime Video <br /> Direct
							</h3>
							<p>
								Video <br />
								Distribution <br />
								Made Easy
							</p>
						</a>
						<a href="#">
							<h3>Blink</h3>
							<p>
								Smart Security <br />
								for Every <br />
								Home
							</p>
						</a>
					</div>
					<div className={classes.footer__column}>
						<a href="#">
							<h3>AbeBooks</h3>
							<p>
								Books, art <br />& collectibles
							</p>
						</a>
						<a href="#">
							<h3>Audible</h3>
							<p>
								Listen to Books & <br />
								Original <br /> Audio <br /> Performances
							</p>
						</a>
						<a href="#">
							<h3>Shopbop </h3>
							<p>
								Designer <br />
								Fashion Brands
							</p>
						</a>
						<a href="#">
							<h3>Neighbors App</h3>
							<p>
								Real-Time Crime <br />& Safety Alerts
							</p>
						</a>
					</div>
					<div className={classes.footer__column}>
						<a href="#">
							<h3>ACX</h3>
							<p>
								Audiobook Publishing <br /> Made Easy
							</p>
						</a>
						<a href="#">
							<h3>Box Office Mojo </h3>
							<p>
								Find Movie <br />
								Box Office Data
							</p>
						</a>
						<a href="#">
							<h3>Woot!</h3>
							<p>
								Deals and <br />
								Shenanigans
							</p>
						</a>
						<a href="#">
							<h3>
								Amazon Subscription <br /> Boxes
							</h3>
							<p>
								Top subscription boxes <br />– right to your door
							</p>
						</a>
					</div>
					<div className={classes.footer__column}>
						<a href="#">
							<h3>Sell on Amazon</h3>
							<p>
								Start a Selling <br />
								Account
							</p>
						</a>
						<a href="#">
							<h3>Goodreads </h3>
							<p>
								Book reviews <br />&<br /> recommendations
							</p>
						</a>
						<a href="#">
							<h3>Zappos</h3>
							<p>
								Shoes & <br /> Clothing
							</p>
						</a>
						<a href="#">
							<h3>PillPack </h3>
							<p>
								Pharmacy <br />
								Simplified
							</p>
						</a>
					</div>
					<div className={classes.footer__column}>
						<a href="#">
							<h3>
								Amazon <br /> Business
							</h3>
							<p>
								Everything <br /> For <br /> Your <br /> Business
							</p>
						</a>
						<a href="#">
							<h3>IMDb </h3>
							<p>
								Movies, TV <br />& Celebrities
							</p>
						</a>
						<a href="#">
							<h3>Ring</h3>
							<p>
								Smart Home <br /> Security <br /> Systems
							</p>
						</a>
					</div>
				</section>
				<section className={classes.footer__last}>
					<Link to="#">Conditions of Use</Link>
					<Link to="#">Privacy Notice</Link>
					<Link to="#">Consumer Health Data Privacy Disclosure</Link>
					<Link to="#">Your Ads Privacy Choices</Link>
				</section>
				<h5 className={classes.footer_h}>
					© 1996-2024, Amazon.com, Inc. or its affiliates
				</h5>
			</footer>
		</>
	);
}

export default Footer;
