import styled from "styled-components";

export const CssButton = styled.button`
	padding: 10px;
	font-size: 16px;
	color: #fff;
	background-color: #007aff;
	border-radius: 5px;
	border: none;
	cursor: pointer;
	
	&:hover {
		opacity: 0.7;
	}
`;

const Button = ({ children, className = "", handleAction , ...restProps }) => {
	return (
		<CssButton className={`btn ${className}`} {...restProps}>{children}</CssButton>
	);
};

export default Button;
