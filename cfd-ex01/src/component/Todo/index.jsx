import { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem/TodoItem";

const TodoContainer = () => {
	const [todos,setTodos] = useState([]);

	const handleAdd = (newInput) =>{
		const newTodo ={
			id:Date.now(),
			label: newInput,
			isEditting:false,
			isDone:false,
		}
		setTodos((prevState)=> [newTodo,...prevState])
	}

	const handleDelete=(idDelete)=>{
		setTodos((prevState)=> prevState.filter((todo) => todo.id !== idDelete));
	}
	const handleEdit=(idEdit)=>{
	
	}
	const handleDone=(idDone)=>{
		setTodos((prevState) => (
			 prevState.map((todos)=>{
				return todos.id === idDone ? { ...todos, isDone: !todos.isDone } : todos;
			})
		))
	}

	const todoActions = {
		handleDelete,handleEdit,handleDone
	}


	return (
		<div className="container">
			<h1 className="title">Todo List</h1>
			<Form btnText="Add" handleSubmit={handleAdd} />
			<ul className="todo-list" id="todoList">
				{todos?.map((todo,index) => {
					const  {id} = todo;
					return <TodoItem todo={todo} id={id || index} key={id || index} 
					todoActions={todoActions}
					/>
				})}
			</ul>
		</div>
	);
};

export default TodoContainer;
