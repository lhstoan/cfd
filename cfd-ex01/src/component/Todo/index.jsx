import { useEffect, useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem/TodoItem";
import Button from "./Button";
import styled from "styled-components";
import axios from "axios";

const Filter = styled.ul`
	display: flex;
	justify-content: center;
	list-style: none;
	padding-left: 0;
`;
const FilterLi = styled.li`
	margin: 0 10px;
`;
const LOCAL_TODOS = "todo";

const TodoContainer = () => {
	const [todo, setTodo] = useState([]);
	const [loading, setLoading] = useState(false);
	const [arrange, setArrange] = useState(true);

	
	const queryTodos = async () => {
		setLoading(true);
		try {
			const res = await axios.get(
				"https://65092931f6553137159b0494.mockapi.io/todos"
			);
			if (res?.data?.length > 0) {
				setTodo(res.data.reverse());
			}
		} catch (error) {
			alert("Error", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		// call api get list todos
		queryTodos();
	}, []);

	const handleAdd = async (newInput) => {
		if (!newInput) return;

		const newRow = {
			label: newInput,
			isDone: false,
		};

		setLoading(true);
		try {
			const res = await axios.post(
				"https://65092931f6553137159b0494.mockapi.io/todos",
				newRow
			);
			if (res?.data?.length > 0) {
				setTodo((prevState) => [res?.data, ...prevState]);
			}
		} catch (error) {
			alert("Error", error);
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async (idDelete) => {
		if (!idDelete) return;
		setLoading(true);
		try {
			const res = await axios.delete(
				`https://65092931f6553137159b0494.mockapi.io/todos/${idDelete}`
			);

			if (res?.data?.length > 0) {
				setTodo((prevTodos) =>
					prevTodos.filter((todo) => todo.id !== idDelete)
				);
			}
		} catch (error) {
			alert("Error", error);
		} finally {
			setLoading(false);
		}
	};

	const handleDone = async (idDone) => {
		if (!idDone) return;

		setLoading(true);
		try {
			const changedTodo = todo.find((todo) => todo.id === idDone) || {};
			const payload = { isDone: !changedTodo.isDone };
			const res = await axios.put(
				`https://65092931f6553137159b0494.mockapi.io/todos/${idDone}`,
				payload
			);
			if (res.data) {
				setTodo((prevTodos) =>
					prevTodos.map((todo) =>
						todo.id === res.data.id ? res.data : todo
					)
				);
			}
		} catch (error) {
			alert("Error", error);
		} finally {
			setLoading(false);
		}
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

	const handleEdit = async (idEdit, editInput) => {
		if (!idEdit && !editInput) return;

		setLoading(true);
		try {
			const payload = { label: editInput };

			const res = await axios.put(
				`https://65092931f6553137159b0494.mockapi.io/todos/${idEdit}`,
				payload
			);

			if (res?.data) {
				setTodo((prevTodos) =>
					prevTodos.map((todo) =>
						todo.id === res.data.id ? res.data : todo
					)
				);
			}
		} catch (error) {

			alert("Error", error);

		} finally {
			setLoading(false);
		}
	};

	const handleSearch = (e) => {
		console.log("handleSearch", e?.target.value);
	};

	const handleTop = (idTop) => {};

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
			{/* <input type="text" onChange={handleSearch} className="input" /> */}

			<ul className="todo-list" id="todoList">
				{todo?.map((todo, i) => {
					return (
						<TodoItem
							todo={todo}
							key={todo?.id || i}
							{...todoActions}
						/>
					);
				})}
			</ul>
			{loading && <div className="loading" />}
		</div>
	);
};

export default TodoContainer;
