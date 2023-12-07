import { useEffect, useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem/TodoItem";
import Button from "./Button";
import styled from "styled-components";

const Filter = styled.ul`
	display: flex;
	justify-content: center;
	list-style: none;
	padding-left: 0;
`;
const FilterLi = styled.li`
	margin: 0 10px;
`;

const TodoContainer = () => {
	const [todo, setTodo] = useState([]);
	const [arrange, setArrange] = useState(true);
	const [searchText, setSearchText] = useState("");
	const [filteredTasks, setFilteredTasks] = useState(todo);
	
	const handleAdd = (newInput) => {
		const newRow = {
			id: Date.now(),
			label: newInput,
			isEditting: false,
			isDone: false,
		};
		setTodo((prevState) => [newRow, ...prevState]);
	};

	const handleDelete = (idDelete) => {
		setTodo((prevState) =>
			[...prevState].filter((todo) => todo.id !== idDelete)
		);
	};

	const handleDone = (idDone) => {
		setTodo((prevState) =>
			[...prevState].map((todo) => {
				return todo.id === idDone
					? { ...todo, isDone: !todo.isDone }
					: todo;
			})
		);
	};

	const handleEditMode = (idEdit) => {
		setTodo((prevState) =>
			[...prevState].map((todo) => {
				return todo.id === idEdit
					? { ...todo, isEditting: !todo.isEditting }
					: todo;
			})
		);
	};

	const handleEdit = (idEdit, editInput) => {
		setTodo((prevState) =>
			[...prevState].map((todo) => {
				return todo.id === idEdit
					? { ...todo, label: editInput, isEditting: false }
					: todo;
			})
		);
	};

	const handleSearch = (e) => {
		setSearchText(e.target.value);
	};
	useEffect(() => {
		setFilteredTasks((tasks) =>
			tasks.filter((t) => t.includes(searchText))
		);
	}, [searchText]);

	const todoActions = {
		handleDelete,
		handleDone,
		handleEditMode,
		handleEdit,
	};

	const todoLength = todo?.length;
	const todoDone = todo?.filter((todo) => todo.isDone == true).length;

	const todoArrage = () => {
		setTodo((prevState) =>
			[...prevState]?.sort((a, b) => {
				if (!arrange) {
					if (a.isDone && !b.isDone) {
						return -1;
					} else if (!a.isDone && b.isDone) {
						return 1;
					} else {
						return 0;
					}
				} else {
					if (a.isDone && !b.isDone) {
						return 1;
					} else if (!a.isDone && b.isDone) {
						return -1;
					} else {
						return 0;
					}
				}
			})
		);
		setArrange(!arrange);
	};

	return (
		<div className="container">
			<h1 className="title">
				Todo List <span>{todoLength}</span>
			</h1>
			<Filter>
				{todoDone > 0 && (
					<FilterLi>
						<Button
							className={arrange ? "btn-delete" : "btn-done"}
							handleAction={todoArrage}
						>
							Arrange
						</Button>
					</FilterLi>
				)}
				<FilterLi>
					<Button className="btn-delete">
						Task Done = {todoDone}
					</Button>
				</FilterLi>
			</Filter>
			<Form btnText="Add" handleSubmit={handleAdd} />
			<br />
			<input type="text" onChange={handleSearch} className="input" />

			<ul className="todo-list" id="todoList">
				{todo?.map((todo, i) => {
					const { id } = todo;
					return (
						<TodoItem
							todo={todo}
							id={id || i}
							key={id || i}
							{...todoActions}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default TodoContainer;
