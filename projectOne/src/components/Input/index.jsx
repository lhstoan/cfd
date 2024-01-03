import { MODAL_TYPES } from "../../config/config-general";
import { useAuthContext } from "../../context/AuthContext";

const Input = ({ label, isRequired, error, renderProps, isChangePass, ...restProps }) => {
	const {handleShowModal}=useAuthContext();
	return (
		<div className="form-group">
			<div className="form-grouppass">
				<label className="label">{label} {isRequired && <span>*</span>}</label>
				{isChangePass && <div className="textchange btnmodal" data-modal="mdchangepass" onClick={(e) => {e.stopPropagation(); handleShowModal(MODAL_TYPES.pass);}}>Đổi mật khẩu</div>}
			</div>
			{renderProps?.({ ...restProps, error }) || <input type="text" className={`form__input ${error ? "formerror" : ""}`} {...restProps} />}
			{error && <p className="error">{error}</p>}
		</div>
	)
}

export default Input