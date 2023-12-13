import { useState } from "react";
import validate from "../utils/validate";

const useForm = (initValueForm, rules) => {
  const [form, setForm] = useState(initValueForm);
  const [error, setError] = useState({});

  const registerInput = (nameInput) => ({
	name: nameInput,
	error: error[nameInput],
	value: form[nameInput],
	onChange: (e) => setForm({ ...form, [nameInput]: e.target.value }),
})

  const _validate = () => {
    const errorObject = validate(rules, form);
    setError(errorObject);
    return errorObject;
  };

  return {
    form,
    error,
    registerInput,
    validate: _validate,
    setForm,
  };
};

export default useForm;