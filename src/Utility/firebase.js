import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAxKFX6Pdz36a6a0STORTqnbEqe7cSELXQ",
	authDomain: "clone-8a593.firebaseapp.com",
	projectId: "clone-8a593",
	storageBucket: "clone-8a593.appspot.com",
	messagingSenderId: "179286181490",
	appId: "1:179286181490:web:9faee2c0e305a9589e64eb",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
