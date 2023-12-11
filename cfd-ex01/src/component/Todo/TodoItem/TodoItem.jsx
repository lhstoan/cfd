import styled from "styled-components";
import Button, { CssButton } from "../Button";
import Form from "../Form";

const CssTodoItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	font-size: 16px;
	border-radius: 10px;
	border: 2px solid gray;
	background-color: ${(props) =>
		props.isDone ? props.theme.bgGrey : props.theme.bgWhite};

	.todo-action {
		display: flex;
		gap: 10px;
	}

	&.done {
		background-color: ${(props) =>
			props.isDone ? props.theme.bgGrey : props.theme.bgWhite};
		.btn-done {
			background-color: #baa800;
		}
	}
`;

const CssLabel = styled.span`
	flex: 1;
	font-size: 20px;
	text-align: left;
	color: ${(props) => (props.isDone ? "white" : "black")};
	text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
`;

const BtnEdit = styled(CssButton)`
	background-color: #baa800;
`;
const BtnDelete = styled(CssButton)`
	background-color: #dc3545;
`;
const BtnDone = styled(CssButton)`
	background-color: ${(props) => (props.isDone ? "#baa800" : "#28a745")};
`;

const TodoItem = ({
	todo,
	handleDelete,
	handleDone,
	handleEdit,
	handleEditMode,
	handleTop,
	...restProps
}) => {
	const { id, label, isDone, isEditting } = todo || {};

	return (
		<CssTodoItem
			className={`todo-item ${isDone ? "done" : ""}`}
			id={id}
			{...restProps}
		>
			{isEditting ? (
				<Form
					value={label}
					btnText="Save"
					handleSubmit={(editInput) => handleEdit?.(id, editInput)}
				/>
			) : (
				<>
					<CssLabel className="todo-label">{label}</CssLabel>
					<div className="todo-action">
						<Button className="btn-done" onClick={() => {handleTop?.(id);}}>TOP</Button>
						<BtnDelete
							className="btn-delete"
							onClick={() => {
								handleDelete?.(id);
							}}
						>
							Delete
						</BtnDelete>
						{!isDone && (
							<BtnEdit
								className="btn-edit"
								onClick={() => {
									handleEditMode?.(id);
								}}
							>
								Edit
							</BtnEdit>
						)}
						<BtnDone
							className="btn-done"
							onClick={() => {
								handleDone?.(id);
							}}
						>
							{isDone ? "Undone" : "Done"}
						</BtnDone>
					</div>
				</>
			)}
		</CssTodoItem>
	);
};

export default TodoItem;
