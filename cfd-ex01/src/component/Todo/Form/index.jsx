import Button from "../Button";

const Form = ({handleSubmit,btnText,...restProps}) => {
	return (
		<form className="form" id="addNewTodo">
			<input className="input" id="newTodo" type="text" {...restProps}/>
			<Button className="btn">{btnText}</Button>
		</form>
	);
};

export default Form;
