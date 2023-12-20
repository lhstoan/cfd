import React from 'react'
import { useAuthContext } from '../../context/AuthContext'

const AuthModal = () => {

	const { isShowModal, handleCloseModal } = useAuthContext();

	return (
		<div>AuthModal</div>
	)
}

export default AuthModal