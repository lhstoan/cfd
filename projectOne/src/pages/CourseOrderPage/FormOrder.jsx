import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { regrexRule, requireRule } from '../../utils/validate';
import Input from './../../components/Input/index';
import Select from './../../components/Select/index';
import useForm from './../../hooks/useForm';

const FormOrder = ({ types, disabled,profile }, ref) => {
	
	// variant form field
	const {
		firstName: profileName,
		email: profileEmail,
		phone: profilePhone,
		lastName: profileLName
	} = profile || {};

	// Handle profile form
	const { form, registerInput, validate, setForm } = useForm(
		{
			name: "",
			email: "",
			phone: "",
			type: "",
		},
		{
			name: [requireRule("Vui lòng nhập tên")],
			email: [
				requireRule("Vui lòng nhập email"),
				regrexRule("email", "Vui lòng nhập đúng định dạng email"),
			],
			phone: [
				requireRule("Vui lòng nhập phone"),
				regrexRule("phone", "Vui lòng nhập đúng định dạng phone"),
			],
			type: [requireRule("Vui lòng chọn hình thức học")],
		}
	);
	useEffect(() => {
		setForm({
			name: profileName ,
			email: profileEmail,
			phone: profilePhone,
			type: "",

		});
	}, [profileName, profileEmail, profilePhone, profileLName]);

	useImperativeHandle(
		ref,
		() => {
			return {
				form:form, validate:validate
			}
		},
	)

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

export default forwardRef(FormOrder)