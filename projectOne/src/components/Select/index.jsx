const Select = ({ options, error, ...restProps }) => {
	return (
		<select {...restProps} className={`form__input ${error ? "formerror" : ""}`}>
			{options?.map((option, index) => (
				<option key={option?.value || index} value={option?.value}>
					{option?.label || ""}
				</option>
			))}
		</select>
	);
};
export default Select;