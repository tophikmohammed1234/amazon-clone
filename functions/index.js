const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { setGlobalOptions } = require("firebase-functions/v2");
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_KEY);
const app = express();

setGlobalOptions({ maxInstances: 10 });

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).json({ message: "success !" });
});

app.post("/payment/create", async (req, res) => {
	const total = parseInt(req.query.total);
	if (total > 0) {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: total,
			currency: "USD",
		});
		res.status(201).json({
			clientSecret: paymentIntent.client_secret,
		});
	} else {
		res.status(403).json({ message: "total must be grater than 0" });
	}
});

exports.api = onRequest(app);
