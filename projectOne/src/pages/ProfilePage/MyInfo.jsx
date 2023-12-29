import { useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { useAuthContext } from "../../context/AuthContext";
import useForm from "../../hooks/useForm";
import { regrexRule, requireRule } from "../../utils/validate";

const MyInfo = () => {
	const { profile } = useAuthContext();
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
			name: profileName + " " + profileLName,
			email: profileEmail,
			phone: profilePhone,
			type: "",
		});
	}, [profileName, profileEmail, profilePhone, profileLName]);

	const _onUpdateProfile = () => {
		const profileErr = validate();
	}
	return (
		<div className="tab__content-item" style={{ display: 'block' }}>
			<form className="form" onSubmit={_onUpdateProfile}>
				<div className="form-container">
					<Input
						label="Họ và tên"
						isRequired
						placeholder="Họ và tên"
						{...registerInput("name")}
					/>
					<Input
						label="Số điện thoại"
						isRequired
						placeholder="Số điện thoại"
						{...registerInput("phone")}
					/>
				</div>
				<div className="form-container">
					<Input
						label="Email"
						isRequired
						placeholder="email"
						disabled
						{...registerInput("email")}
					/>
					<Input
						label="Mật khẩu"
						isRequired
						isChangePass
						placeholder="*******"
						disabled
						{...registerInput("password")}
					/>

				</div>
				<Input
					label="Facebook URL"
					placeholder="https://nghiatran.info"
					{...registerInput("url")}
				/>
				<Input
					label="Website"
					placeholder="www.com"
					{...registerInput("website")}
				/>
				<Input label="Giới thiệu bản thân"
					renderProps={(props) =>
						<TextArea {...props} />
					}
					{...registerInput("content")}
				/>
				<div className="form-group">
					<div className="btnsubmit">
						<Button variant="primary" type="submit">Lưu lại</Button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default MyInfo
