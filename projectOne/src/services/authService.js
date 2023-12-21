import axiosInstance from "../utils/axiosInstance";
import tokenMenthod from "../utils/token";

export const authService={
	login(payload={}) {
		return axiosInstance.post(`/customer/login`,payload);
	},
	register(payload={}) {
		return axiosInstance.post(`/customer/register`,payload);
	},
	getProfile() {
		return axiosInstance.get(`/customer/profiles`,{
			headers: {
				Authorization: `Bearer ${tokenMenthod.get()?.accessToken}`,
			},
		});
	},
	updateProfile(payload={}) {
		return axiosInstance.put(`/customer/profiles`,payload,{
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
	},
};