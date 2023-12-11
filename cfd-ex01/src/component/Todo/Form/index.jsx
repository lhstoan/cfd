import {useState} from "react";
import Button from "../Button";
import styled from "styled-components";

const CssForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CssInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
`;




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
		<CssForm className="form" id="addNewTodo" onSubmit={_onSubmit}>
			<CssInput className="input" id="newTodo" type="text" {...restProps} value={input} onChange={_onChange}/>
			<Button className="btn">{btnText}</Button>
		</CssForm>
	);
};

export default Form;
