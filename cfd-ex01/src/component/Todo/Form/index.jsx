import { useState } from "react";
import Button from "../Button";

const Form = ({handleSubmit,btnText,...restProps}) => {
	const [input, setInput] = useState("");

	const _onChangeInput = (e) =>{
		setInput(e?.target.value)
	}
	const _onSubmit = (e) =>{
		e.preventDefault();
		if(input !== ""){
			handleSubmit?.(input);
			setInput("")
		}
	}
	return (
		<form className="form" id="addNewTodo" onSubmit={_onSubmit}>
			<input className="input" id="newTodo" type="text" onChange={_onChangeInput} {...restProps} value={input}/>
			<Button className="btn">{btnText}</Button>
		</form>
	);
};

export default Form;
