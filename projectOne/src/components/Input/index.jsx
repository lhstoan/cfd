const Input = ({label,isRequired,error,renderProps,...restProps}) => {
	return (
		<div className="form-group">
			<label className="label">{label} {isRequired && <span>*</span>}</label>
			{renderProps?.({...restProps,error}) || <input type="text" className={`form__input ${error ? "formerror":""}`} {...restProps}/>}
			{error && <p className="error">{error}</p>}
		</div>
	)
}

export default Input