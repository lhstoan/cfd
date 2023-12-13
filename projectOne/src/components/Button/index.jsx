// eslint-disable-next-line no-unused-vars, react/prop-types
const Button = ({children, variant = "primary",...restProps}) => {
	let btnClass = "";
	switch (variant) {
		case "primary":
			btnClass = "btn btn--primary";
			break;
		case "border":
			btnClass = "btn btn--border --black";
			break;
		default:
			break;
	}
  return (
	<button className={btnClass} {...restProps}>{children}</button>
  )
}

export default Button