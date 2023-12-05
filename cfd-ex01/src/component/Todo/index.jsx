import Form from "./Form";
import TodoItem from "./TodoItem/TodoItem";

const TodoContainer = () => {
	const todos = [
		{
			id: 1701098599234,
			label: "Task 1",
			isDone: false,
			isEditting: false,
		},
		{
			id: 1701098599254,
			label: "Task 2",
			isDone: true,
			isEditting: false,
		},
		{
			id: 1701098603079,
			label: "Task 3",
			isDone: false,
			isEditting: true,
		},
	];
	const handleDelete = () =>{
		return "conconcocn"
	}
	return (
		<div className="container">
			<h1 className="title">Todo List</h1>
			<Form btnText="Add" />
			<ul className="todo-list" id="todoList">
				{todos.map((todo) => {
					const  {id} = todo;
					return <TodoItem todo={todo} id={id} key={id}/>
				})}
			</ul>
		</div>
	);
};

export default TodoContainer;
