import React, { createContext, useContext, useEffect, useState } from 'react'
import { authService } from './../services/authService';
import { message } from 'antd';
import tokenMethod from './../utils/token';
import { useNavigate } from 'react-router-dom';
import PATHS from '../config/config-path';

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState("");
	const [profile, setProfile] = useState({});

	useEffect(() => {
		const accessToken = !!tokenMethod.get()?.accessToken
		if (accessToken) {
			handleGetProfile();
		}
		return () => {

		};
	}, []);

	const handleShowModal = (modalType) => {
		if (!!!tokenMethod.get()) {
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

	return (
		<AuthContext.Provider value={{ showModal, profile, handleShowModal, handleCloseModal, handleLogin, handleRegister, handleLogout }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider

export const useAuthContext = () => useContext(AuthContext);