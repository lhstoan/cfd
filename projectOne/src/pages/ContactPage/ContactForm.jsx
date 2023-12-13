
import Button from "../../components/Button"
import Input from "../../components/Input"
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import useForm from "../../hooks/useForm";
import { regrexRule, requireRule } from "../../utils/validate";


const rules = {
	name: [requireRule("Vui lòng nhập tên")],
	email: [
		requireRule("Vui lòng nhập email"),
		regrexRule("email", "Vui lòng nhập đúng định dạng email"),
	],
	phone: [
		requireRule("Vui lòng nhập phone"),
		regrexRule(
			/(84|0[3|5|7|8|9])+([0-9]{8})\b/,
			"Vui lòng nhập đúng định dạng phone"
		),
	],
	topic: [requireRule("Vui lòng nhập topic")],
	content: [requireRule()],
};

const ContactForm = ({handleFormSubmit}) => {
	const { form, registerInput, validate } = useForm(
		{
			name: "",
			email: "",
			phone: "",
			topic: "",
			content: "",
		},
		rules
	);

	const _onSubmit = (e) => {
		e.preventDefault();
		const errorObject = validate();

		if (Object.keys(errorObject).length > 0) {
			console.log("Submit error: ", errorObject);
		} else {
			handleFormSubmit?.(form);
		}
	};
	return (
		<div className="form">
			<h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
			<Input label="Họ và tên" isRequired {...registerInput("name")} />
			<Input label="Email" isRequired  {...registerInput("email")} />
			<Input label="Số điện thoại" isRequired {...registerInput("phone")} />
			<Input label="Chủ đề cần hỗ trợ" isRequired
				renderProps={(props) =>
					<Select
						options={[
							{ value: "", label: "--" },
							{ value: "react", label: "ReactJs" },
							{ value: "responsive", label: "Web Responsive" },
						]}
						{...props}
					/>
				}
				{...registerInput("topic")}
			/>
			<Input label="Nội dung" isRequired
				renderProps={(props) =>
					<TextArea {...props} />
				}
				{...registerInput("content")}
			/>
			<div className="btncontrol">
				<Button variant="primary" onClick={_onSubmit}>Gửi</Button>
			</div>
		</div>
	)
}

export default ContactForm