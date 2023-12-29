import { message } from "antd";
import { useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { useAuthContext } from "../../context/AuthContext";
import useForm from "../../hooks/useForm";
import useMutation from "../../hooks/useMutation";
import { authService } from "../../services/authService";
import { regrexRule, requireRule } from "../../utils/validate";

const MyInfo = () => {
	const { profile } = useAuthContext();
	const { loading: orderLoading, execute: updateProfile } = useMutation(
		authService.updateProfile
	);
	// variant form field 
	const {
		firstName: profileName,
		lastName: profileLName,
		email: profileEmail,
		phone: profilePhone,
		website: website,
		introduce: content,
		facebookURL: url,
	} = profile || {};

	// Handle profile form
	const { form, registerInput, validate, setForm } = useForm(
		{
			name: "",
			phone: "",
			url: "",
			website: "",
			content: "",
		},
		{
			name: [requireRule("Vui lòng nhập tên")],
			content: [requireRule("Vui lòng nhập giới thiệu bản thân !!!")],
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
			url: [
				requireRule("Vui lòng điền đường dẫn facebook !!!"),
				regrexRule("facebook", "Vui lòng nhập đúng định dạng link facebook !!!"),
			],
		}
	);
	useEffect(() => {
		setForm({
			name: profileName,
			email: profileEmail,
			phone: profilePhone,
			url: url,
			website: website,
			content: content,
		});
	}, [profileName, profileEmail, profilePhone, profileLName, url, website, content]);

	const _onUpdateProfile = (e) => {
		e.stopPropagation();
		const profileErr = validate();
		if (!Object.keys(profileErr).length > 0) {
			// setup payload
			const payload = {
				firstName: form?.name,
				lastName: profileLName,
				facebookURL: form?.url,
				website: form?.website,
				phone: form?.phone,
				introduce: form?.content,
			};
			updateProfile(payload, {
				onSuccess: async () => {
					message.success("Cập nhật thành công!");
				},
				onFail: () => {
					message.error("Cập nhật thất bại !!!")
				},
			})

		}
	}
	return (
		<div className="tab__content-item" style={{ display: 'block' }} >
			<div className="form" >
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
					isRequired
					placeholder="https://nghiatran.info"
					{...registerInput("url")}
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
					{...registerInput("content")}
				/>
				<div className="form-group">
					<div className="btnsubmit">
						<Button variant="primary" onClick={_onUpdateProfile}>Lưu lại</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyInfo
