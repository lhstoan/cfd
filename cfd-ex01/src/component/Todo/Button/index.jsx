const Button = ({children,className="",handleAction, ...restProps }) => {
	return (
		<button className={`btn ${className}`} {...restProps} onClick={handleAction}>{children}</button>
	);
};

export default Button;
