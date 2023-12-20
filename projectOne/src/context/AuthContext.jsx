import React, { createContext, useContext, useState } from 'react'
const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
	const [showModal, setShowModal] = useState("");
	const [isLogin, setIsLogin] = useState(false);

	const handleShowModal = (modalType) => {
		setShowModal(modalType || "");
	};

	const handleCloseModal = (e) => {
		e?.stopPropagation();
		setShowModal("");
	};


	return (
		<AuthContext.Provider value={{ showModal, handleShowModal, handleCloseModal }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider

export const useAuthContext = () => useContext(AuthContext);