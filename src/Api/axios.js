import axios from "axios";
const axiosInstance = axios.create({
	// baseURL: "http://127.0.0.1:5001/clone-8a593/us-central1/api",
	baseURL: "https://amazon-api-deployment-eky1.onrender.com",
});

export { axiosInstance };
