import React,{useState} from 'react'
import Input from '../Input';
import {useAuthContext} from '../../context/AuthContext';
import {MODAL_TYPES} from '../../config/config-general';
import Button from '../Button';
import useForm from '../../hooks/useForm';
import {regrexRule,requireRule} from '../../utils/validate';
import Loading from '../Loading';


const FormLogin=() => {
	const {handleShowModal,handleCloseModal,handleLogin}=useAuthContext();
	const [loading,setLoading]=useState(false);
	const {form,validate,registerInput}=useForm({
		email: "",
		password: "",
	},{
		email: [requireRule(),regrexRule("email")],
		password: [requireRule()],
	});
	const _onSubmitForm=(e) => {
		e.preventDefault();
		const errorObj=validate();

		if (Object.keys(errorObj).length>0) {
			console.log('errorObj',errorObj)
		} else {
			setLoading(true);
			handleLogin?.(form,() => {
				setTimeout(() => {
					setLoading(false);
				},1000);
			})
		}
	}

	return (
		<div className="modal__wrapper-content mdlogin active" style={{position: "relative"}}>
			{loading&&<Loading />}
			<div className="form__bottom">
				<p>Bạn chưa có tài khoản?</p>
				<div className="color--primary btnmodal" data-modal="mdregister" >
					<strong onClick={(e) => {e.stopPropagation(); handleShowModal(MODAL_TYPES.register);}}>Đăng ký</strong>
				</div>
			</div>
			{/* <div className="social">
				<a className="btn btn--google" href="#"><i><img src="/img/icon-google.svg" alt="Google CFD" /></i><span>Đăng nhập bằng Google</span></a>
				<a className="btn btn--facebook" href="#"><i><img src="/img/icon-facebook-v2.svg" alt="Google CFD" /></i><span>Đăng nhập bằng Google</span></a>
			</div>
			<span className="line">Hoặc</span> */}
			<form className="form" onSubmit={_onSubmitForm}>
				<Input placeholder="Email" {...registerInput("email")} />
				<Input placeholder="Mật khẩu" type="password" {...registerInput("password")} />
				<div className="form__bottom">
					<div className="color--primary" onClick={(e) => {e.stopPropagation(); handleShowModal(MODAL_TYPES.pass);}}>
						Quên mật khẩu?
					</div>
				</div>
				<Button className="btn btn--primary form__btn-register" type="submit">Đăng nhập</Button>
			</form>
		</div>
	)
}

export default FormLogin