import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars, react/prop-types
const Button = ({ children, link, variant = "primary", ...restProps }) => {
	let btnClass = "";
	switch (variant) {
		case "primary":
			btnClass = "btn btn--primary";
			break;
		case "border":
			btnClass = "btn btn--border --black";
			break;
		case "default":
			btnClass = "btn btn--default";
			break;
		case "regcourse":
			btnClass = "btn btn--primary btn-regcourse";
			break;
		default:
			break;
	}

	if (link) {
		return <Link to={link} className={btnClass}  {...restProps}>{children}</Link>
	}

	return (
		<button className={btnClass} {...restProps}>{children}</button>
	)
}

export default Button