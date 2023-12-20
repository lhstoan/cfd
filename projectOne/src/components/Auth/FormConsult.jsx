import React from 'react'

const FormConsult = () => {
	return (
		<div className="modal__wrapper-content mdconsult">
			<h3 className="title --t3">Đăng ký tư vấn</h3>
			<form action="#" className="form">
				<div className="form-group">
					<input defaultValue type="text" className="form__input formerror" placeholder="Họ và tên" />
					<p className="error">Họ và tên không được để trống</p>
				</div>
				<div className="form-group">
					<input defaultValue type="text" className="form__input" placeholder="Số điện thoại" />
				</div>
				<div className="form-group">
					<input defaultValue type="email" className="form__input" placeholder="Email" />
				</div>
				<div className="form-group">
					<textarea name id cols={30} rows={4} className="form__input" placeholder="Nội dung cần tư vấn" defaultValue={""} />
				</div>
				<button className="btn btn--primary form__btn-register" type="submit">Gửi thông tin</button>
			</form>
		</div>
	)
}

export default FormConsult