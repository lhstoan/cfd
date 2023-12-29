import React from 'react';
import Input from './../../components/Input/index';
import Select from './../../components/Select/index';

const FormOrder = ({ registerInput, types, disabled }) => {
	const typeOptions =
		types?.length > 0
			? [
				{ value: "", label: "--" },
				...types.map((type) => ({ value: type, label: type })),
			]
			: [{ value: "", label: "--" }];
	return (
		<div className="itemorder formorder">
			<h3 className="title --t3">Thông tin cá nhân</h3>
			<div className="boxorder">
				<form action="#" className="form">
					<div className="form-container">
						<Input
							label="Họ và tên"
							isRequired
							disabled={disabled}
							placeholder="Họ và tên"
							{...registerInput("name")}
						/>
						<Input
							label="Email"
							isRequired
							disabled={disabled}
							placeholder="nghiatran@2018@gmail.com"
							{...registerInput("email")}
						/>
					</div>
					<div className="form-container">
						<Input
							label="Số điện thoại"
							isRequired
							placeholder="Số điện thoại"
							disabled={disabled}
							{...registerInput("phone")}
						/>
						<Input
							label="Hình thức học"
							isRequired
							disabled={disabled}
							renderProps={(inputProps) => {
								return <Select options={typeOptions} {...inputProps} />;
							}}
							{...registerInput("type")}
						/>
					</div>
				</form>
			</div>
		</div>
	)
}

export default FormOrder