import axios from "axios";
import {BASE_URL} from "../config/config-environment";


const axiosInstance=axios.create({
	baseURL: BASE_URL,
});


axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		console.log("error",error);
	}
);

axiosInstance.interceptors.request.use(
	(request) => {
		return request;
	},
	(error) => {
		console.log("error",error);
	}
);
export default axiosInstance;