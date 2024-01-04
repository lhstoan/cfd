import { useEffect, useRef } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { useAuthContext } from "../../context/AuthContext";
import useForm from "../../hooks/useForm";
import { regrexRule, requireRule } from "../../utils/validate";

const MyInfo = () => {
	const { profile, handleUpdateProfile } = useAuthContext();
	


	// Handle profile form
	const { form, registerInput, validate, setForm } = useForm(
		{
			firstName: "",
			email: "",
			phone: "",
			password: "********",
			facebookURL: "",
			website: "",
			introduce: "",
		},
		{
			firstName: [requireRule("Vui lòng nhập tên")],
			introduce: [requireRule("Vui lòng nhập giới thiệu bản thân !!!")],
			website: [
				requireRule("Vui lòng nhập website !!!"),
				regrexRule("website", "Vui lòng nhập đúng định dạng link!!!"),
			],
			email: [
				requireRule("Vui lòng nhập email"),
				regrexRule("email", "Vui lòng nhập đúng định dạng email"),
			],
			phone: [
				requireRule("Vui lòng nhập phone"),
				regrexRule("phone", "Vui lòng nhập đúng định dạng phone"),
			],
			facebookURL: [
				requireRule("Vui lòng điền đường dẫn facebook !!!"),
				regrexRule("facebook", "Vui lòng nhập đúng định dạng link facebook !!!"),
			],
		}
	);
	const _onSubmit = (e) => {
		e.preventDefault();
		const errorObject = validate();
		if (Object.keys(errorObject).length > 0) {
			console.log("Submit error: ", errorObject);
		} else {
			handleUpdateProfile?.(form);
		}
	};
	const ProfileRef = useRef({});
	const isFormDiff = useRef(false);
	useEffect(() => {
		if (profile) {
			setForm({ ...form, ...profile });
			ProfileRef.current = { ...form, ...profile };
		}
	}, [profile]);

	// useEffect(() => {
		
	// });

	return (
		<div className="tab__content-item" style={{ display: 'block' }} >
			<div className="form" >
				<div className="form-container">
					<Input
						label="Họ và tên"
						isRequired
						placeholder="Họ và tên"
						{...registerInput("firstName")}
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
					isRequired
					placeholder="https://nghiatran.info"
					{...registerInput("facebookURL")}
				/>
				<Input
					label="Website"
					isRequired
					placeholder="www.com"
					{...registerInput("website")}
				/>
				<Input label="Giới thiệu bản thân"
					isRequired
					renderProps={(props) =>
						<TextArea {...props} />
					}
					{...registerInput("introduce")}
				/>
				<div className="form-group">
					<div className="btnsubmit">
						<Button variant="primary" onClick={_onSubmit}>Lưu lại</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyInfo
