import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars, react/prop-types
const Button = ({ children, link, disabled, variant = "primary", loading, ...restProps }) => {
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
		case "disable":
			btnClass = "btn btn--primary btn-regcourse --disable";
			break;
		default:
			break;
	}

	if (disabled) {
		btnClass = "btn btn--grey";
		restProps.onClick = () => { };
	}


	if (link) {
		return <Link to={link} className={btnClass}  {...restProps}>{children}</Link>
	}

	return (
		<button className={btnClass} {...restProps}>
			{children}
			{loading && (
				<svg
					version="1.1"
					id="L9"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 100 100"
					enableBackground="new 0 0 0 0"
					xmlSpace="preserve"
				>
					<path
						fill="#fff"
						d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
					>
						<animateTransform
							attributeName="transform"
							attributeType="XML"
							type="rotate"
							dur="1s"
							from="0 50 50"
							to="360 50 50"
							repeatCount="indefinite"
						/>
					</path>
				</svg>
			)}
		</button>
	)
}

export default Button