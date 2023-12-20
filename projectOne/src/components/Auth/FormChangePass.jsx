import React, { useState } from 'react'
import Loading from '../Loading'
import { useAuthContext } from '../../context/AuthContext';
import useForm from '../../hooks/useForm';
import { regrexRule, requireRule } from '../../utils/validate';
import { message } from 'antd';
import Button from '../Button';
import Input from '../Input';

const FormChangePass = () => {
	const { handleShowModal, handleCloseModal } = useAuthContext();
	const [loading, setLoading] = useState(false);
	const { formData, validate, registerInput } = useForm({
		email: "",
	}, {
		email: [requireRule(), regrexRule("email")]
	});

	const _onSubmitForm = (e) => {
		e.preventDefault();
		const errorObj = validate();
		if (Object.keys(errorObj).length > 0) {
			console.log('errorObj', errorObj)
			message.error("Đăng ký thất bại !!!");
		} else {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				message.success("Đăng ký thành công");
				handleCloseModal()
			}, 1000);
		}
	}

	return (
		<div className="modal__wrapper-content mdchangepass active">
			{loading && <Loading />}
			<h3 className="title --t3">Đổi mật khẩu</h3>
			<form onSubmit={_onSubmitForm} className="form">
				<Input placeholder="Email của bạn cần lấy lại pass" {...registerInput("email")} />
				<Button className="btn btn--primary form__btn-register" type="submit">Gửi thông tin</Button>
			</form>
		</div>
	)
}

export default FormChangePass