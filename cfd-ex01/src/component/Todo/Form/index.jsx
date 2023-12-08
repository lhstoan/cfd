import {useState} from "react";
import Button from "../Button";

const Form = ({handleSubmit,handleChangeInput,btnText,value = "",...restProps}) => {
	const [input, setInput] = useState(value)

	const _onChange=(e)=>{
		setInput(e?.target.value);
	}

	const _onSubmit=(e)=>{
		e.preventDefault();
		input.trim() !== "" && handleSubmit?.(input);
		setInput("");
	}

	return (
		<form className="form" id="addNewTodo" onSubmit={_onSubmit}>
			<input className="input" id="newTodo" type="text" {...restProps} value={input} onChange={_onChange}/>
			<Button className="btn">{btnText}</Button>
		</form>
	);
};

export default Form;
