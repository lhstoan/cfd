import React,{createContext,useState} from 'react'
const AuthContext=createContext()

const AuthContextProvider=({children}) => {
	const [isShowModal,setIsShowModal]=useState(false);

	const handleShowModal=(isShow) => {
		setIsShowModal(isShow);
	};

	return (
		<AuthContext.Provider value={{isShowModal,handleShowModal}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
