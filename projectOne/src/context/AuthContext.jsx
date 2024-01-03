import { message } from 'antd';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MODAL_TYPES } from '../config/config-general';
import PATHS from '../config/config-path';
import { orderService } from '../services/orderService';
import { authService } from './../services/authService';
import tokenMethod from './../utils/token';

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState("");
	const [profile, setProfile] = useState({});
	const [courseInfo, setCourseInfo] = useState([]);
	const [paymentInfo, setPaymentInfo] = useState([]);

	useEffect(() => {
		const accessToken = !!tokenMethod.get()?.accessToken
		if (accessToken) {
			handleGetProfile();
			handleGetProfileCourse();
			handleGetProfilePayment();
		}
		return () => {

		};
	}, []);

	const handleShowModal = (modalType) => {
		if (!!!tokenMethod.get()) {
			setShowModal(modalType || "");
		}
		if(modalType==MODAL_TYPES.pass && !!tokenMethod.get()){
			setShowModal(modalType || "");
		}
	};

	const handleCloseModal = (e) => {
		e?.stopPropagation();
		setShowModal("");

	};

	const handleLogin = async (loginData, callback) => {
		const payload = { ...loginData };

		try {
			const res = await authService.login(payload);
			if (res?.data?.data) {
				const { token: accessToken, refreshToken } = res?.data?.data || "";
				// set token from api login
				tokenMethod.set({ accessToken, refreshToken })

				message.success("Đăng nhập thành công!")
				handleGetProfile();
				handleCloseModal();
			} else {
				message.error("Đăng nhập thất công!")
			}
		} catch (error) {
			console.log('error', error)
		}
		finally {
			callback?.();
		}
	}

	const handleRegister = async (registerData, callback) => {
		const { name, email, password } = registerData || "";
		const payload = {
			firstName: "CFD",
			lastName: name,
			email,
			password,
		};

		try {
			const res = await authService.register(payload);
			if (res?.data?.data?.id) {
				message.success("Đăng ký thành công!")
				handleLogin({ email, password })
			} else {
				message.error("Đăng ký thất công!")
			}
		} catch (error) {
			console.log('error', error)
		}
		finally {
			callback?.();
		}
	}

	const handleLogout = () => {
		tokenMethod.remove();
		message.success("Tài khoản đã đăng xuất!")
		navigate(PATHS.HOME)
		setProfile({});
	}

	const handleGetProfile = async (callback) => {
		// const idCustomer=jwtDecode(tokenMethod?.get()?.accessToken);

		try {
			const res = await authService.getProfile();
			if (res?.data?.data) {
				setProfile(res?.data?.data);
			}
		} catch (error) {
			console.log('error', error)
			handleLogout()
		}
		finally {
			callback?.();
		}
	}
	const handleGetProfileCourse = async () => {
		try {
			const res = await orderService.getCourseHistories();
			const orderedCourses = res?.data?.data?.orders || [];
			setCourseInfo(orderedCourses);
		} catch (error) {
			console.log("getCourseHistories error", error);
		}
	};

	const handleGetProfilePayment = async () => {
		try {
			const res = await orderService.getPaymentHistories();
			const payments = res?.data?.data?.orders || [];
			setPaymentInfo(payments);
		} catch (error) {
			console.log("getPaymentHistories error", error);
		}
	};

	const handleUpdateProfile = async (profileData) => {
		try {
			const {
				firstName,
				email,
				password,
				facebookURL,
				introduce,
				phone,
				website,
			} = profileData;
			const payload = {
				firstName: firstName,
				lastName: "",
				email,
				password,
				facebookURL,
				website,
				introduce,
				phone,
			};
			const res = await authService.updateProfile(payload);
			if (res?.data?.data?.id) {
				message.success("Cập nhật thông tin thành công");
				handleGetProfile();
			}
		} catch (error) {
			console.log("error", error);
		}
	};

	return (
		<AuthContext.Provider value={{
			showModal, profile, courseInfo, paymentInfo,
			handleShowModal,
			handleCloseModal,
			handleLogin,
			handleRegister,
			handleLogout,
			handleGetProfileCourse,
			handleGetProfilePayment,
			handleUpdateProfile
		}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider

export const useAuthContext = () => useContext(AuthContext);