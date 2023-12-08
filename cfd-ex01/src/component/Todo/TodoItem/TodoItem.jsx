import Button from "../Button";
import Form from "../Form";

const TodoItem = ({todo, handleDelete,handleDone,handleEdit,handleEditMode,...restProps}) => {
	const {id, label, isDone, isEditting } = todo || {};

	return (
		<li className={`todo-item ${isDone ? "done" : ""}`} id={id} {...restProps} >
			{isEditting ? (
				<Form value={label} btnText="Save" handleSubmit={(editInput) => handleEdit?.(id,editInput)} />
			) : (
				<>
					<span className="todo-label">{label}</span>
					<div className="todo-action">
						{/* <Button className="btn-done" >TOP</Button> */}
						<Button className="btn-delete" handleAction={()=>{handleDelete?.(id)}}>Delete</Button>
						{!isDone && <Button className="btn-edit" handleAction={()=>{handleEditMode?.(id)}}>Edit</Button>}
						<Button className="btn-done" handleAction={()=>{handleDone?.(id)}}>
							{isDone ? "Undone" : "Done"}
						</Button>
					</div>
				</>
			)}
		</li>
	);
};

export default TodoItem;
