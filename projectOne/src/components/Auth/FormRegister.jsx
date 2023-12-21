import React,{useState} from 'react'
import {useAuthContext} from '../../context/AuthContext';
import {MODAL_TYPES} from '../../config/config-general';
import Input from '../Input';
import useForm from '../../hooks/useForm';
import {regrexRule,requireRule} from '../../utils/validate';
import {Link} from 'react-router-dom';
import PATHS from '../../config/config-path';
import Button from '../Button';
import Loading from '../Loading';


const FormRegister=() => {
	const {handleShowModal,handleRegister}=useAuthContext();
	const [loading,setLoading]=useState(false);
	const {form,validate,registerInput}=useForm({
		name: "",
		email: "",
		password: "",
		confirmPass: ""
	},{
		name: [requireRule()],
		email: [requireRule(),regrexRule("email")],
		password: [requireRule()],
		confirmPass: [
			requireRule(),
			(value,values) => {
				if (values.password&&value!==values.password) {
					return "Chưa đúng với pass"
				}
				return false;
			}
		],
	});

	const _onSubmitForm=(e) => {
		e.preventDefault();
		const errorObj=validate();
		if (Object.keys(errorObj).length>0) {
			console.log('errorObj',errorObj)
		} else {
			setLoading(true);
			if (typeof handleRegister==="function") {
				handleRegister?.(form,() => {
					setTimeout(() => {
						setLoading(false);
					},1000);
				})
			}
		}
	}

	return (
		<div className="modal__wrapper-content mdregister active" style={{position: "relative"}}>
			{loading&&<Loading />}
			<div className="form__bottom">
				<p>Bạn đã có tài khoản?</p>
				<div className="color--primary btnmodal" data-modal="mdlogin">
					<strong onClick={(e) => {e.stopPropagation(); handleShowModal(MODAL_TYPES.login);}}>Đăng nhập</strong>
				</div>
			</div>
			{/* <div className="social">
				<a className="btn btn--google" href="#"><i><img src="/img/icon-google.svg" alt="Google CFD" /></i><span>Đăng ký bằng Google</span></a>
				<a className="btn btn--facebook" href="#"><i><img src="/img/icon-facebook-v2.svg" alt="Google CFD" /></i><span>Đăng ký bằng Google</span></a>
			</div>
			<span className="line">Hoặc</span> */}
			<form className="form" onSubmit={_onSubmitForm}>
				<Input placeholder="Họ và tên" {...registerInput("name")} />
				<Input placeholder="Email" {...registerInput("email")} />
				<Input placeholder="Mật khẩu" type="password" {...registerInput("password")} />
				<Input placeholder="Xác nhận mật khẩu" type="password" {...registerInput("confirmPass")} />
				<p className="form__argee">
					Với việc đăng ký, bạn đã đồng ý {" "}
					<Link className="color--primary" to={PATHS.PRIVACY}>Chính Sách Điều Khoản</Link> của CFD
				</p>
				<Button className="btn btn--primary form__btn-register" type="submit">Đăng ký tài khoản</Button>
			</form>
		</div>
	)
}

export default FormRegister