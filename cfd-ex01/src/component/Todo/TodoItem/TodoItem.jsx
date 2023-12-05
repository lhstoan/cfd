import Button from "../Button";
import Form from "../Form";

const TodoItem = ({todo, handleDelete, handleEdit, handleDone,...restProps}) => {

	const { label, isDone, isEditting } = todo || "";

	return (
		<li className={`todo-item ${isDone ? "done" : ""}`} {...restProps}>
			{isEditting ? (
				<Form btnText="Save" />
			) : (
				<>
					<span className="todo-label">{label}</span>
					<div className="todo-action">
						<Button className="btn-delete">Delete</Button>
						{!isDone && <Button className="btn-edit">Edit</Button>}
						<Button className="btn-done">
							{isDone ? "Undone" : "Done"}
						</Button>
					</div>
				</>
			)}
		</li>
	);
};

export default TodoItem;
