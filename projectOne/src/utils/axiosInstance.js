import axios from "axios";
import { BASE_URL } from "../config/config-environment";


const axiosInstance = axios.create({
	baseURL: BASE_URL,
});

export default axiosInstance;