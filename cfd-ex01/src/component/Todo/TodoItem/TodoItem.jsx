import Button from "../Button";
import Form from "../Form";

const TodoItem = ({todo, todoActions,...restProps}) => {

	const  {handleDelete,handleEdit,handleDone} = todoActions;
	const { id,label, isDone, isEditting } = todo || "";
	return (
		<li className={`todo-item ${isDone ? "done" : ""}`} {...restProps}>
			{isEditting ? (
				<Form btnText="Save"/>
			) : (
				<>
					<span className="todo-label">{label}</span>
					<div className="todo-action">
						<Button className="btn-delete" handleAction={()=> handleDelete(id)} >Delete</Button>
						{!isDone && <Button className="btn-edit"  handleAction={()=> handleEdit(id)} >Edit</Button>}
						<Button className="btn-done"  handleAction={()=> handleDone(id)} >
							{isDone ? "Undone" : "Done"}
						</Button>
					</div>
				</>
			)}
		</li>
	);
};

export default TodoItem;
