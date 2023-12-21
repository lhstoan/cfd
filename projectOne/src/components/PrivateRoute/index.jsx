import React from 'react'
import tokenMenthod from '../../utils/token'
import {Navigate,Outlet,useNavigate} from 'react-router-dom'
import {useAuthContext} from '../../context/AuthContext'
import {MODAL_TYPES} from '../../config/config-general'

const PrivateRoute=({redirctPath=""}) => {
	const {handleShowModal}=useAuthContext();
	const navigate=useNavigate();
	if (!!!tokenMenthod.get()) {
		handleShowModal?.(MODAL_TYPES.login);
		if (redirctPath) {
			return <Navigate to={redirctPath} />
		} else {
			navigate(-1);
		}
	}
	return <Outlet />
}

export default PrivateRoute