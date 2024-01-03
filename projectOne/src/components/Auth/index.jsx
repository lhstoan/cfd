import ReactDOM from 'react-dom';
import { MODAL_TYPES } from "../../config/config-general";
import { useAuthContext } from "../../context/AuthContext";
import FormChangePass from "./FormChangePass";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

const Auth=() => {

	const {showModal,handleCloseModal}=useAuthContext();
	
	return ReactDOM.createPortal(
		<div className={`modal modallogin ${showModal? "open":""}`} >
			<div className="modal__wrapper">
				<div className="modal__wrapper-close" onClick={handleCloseModal}>
					<img src="/img/close_icon.svg" alt="CFD Register" />
				</div>
				{showModal===MODAL_TYPES.login&&<FormLogin />}
				{showModal===MODAL_TYPES.register&&<FormRegister />}
				{showModal===MODAL_TYPES.pass&&<FormChangePass />}
			</div>
			<div className="modal__overlay" onClick={handleCloseModal} />
		</div>,document.body
	)
}

export default Auth