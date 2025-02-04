import { useEffect, useState } from "react";
import {
	deleteTodoApi,
	retrieveAllTodosForUsernameApi,
} from "./api/TodoApiService";
import { getValue } from "@testing-library/user-event/dist/utils";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodosComponent() {
	const today = new Date();

	const authContext = useAuth();
	const username = authContext.username;

	const navigate = useNavigate();

	const targetDate = new Date(
		today.getFullYear() + 1,
		today.getMonth(),
		today.getDate()
	);

	const [todos, setTodos] = useState([]);
	const [message, setMessage] = useState(null);

	useEffect(() => refreshTodos(), []);

	function refreshTodos() {
		retrieveAllTodosForUsernameApi(username)
			.then((response) => setTodos(response.data))
			.catch((error) => console.log(error));
	}

	function deleteTodo(id) {
		deleteTodoApi(username, id)
			.then(
				() => {
					setMessage(`Delete of todo with id= ${id} successful.`);
					refreshTodos();
				}
				//1. Display message
				//2. Update Todos List
			)
			.catch((error) => console.log(error));
	}

	function updateTodo(id) {
		navigate(`/todo/${id}`);
	}

	function addNewTodo() {
		navigate(`/todo/-1`);
	}

	// const todos = [
	// 	{
	// 		id: 1,
	// 		description: "Learn SpringBoot",
	// 		done: false,
	// 		targetDate: targetDate,
	// 	},
	// 	{
	// 		id: 2,
	// 		description: "Learn Nginx",
	// 		done: false,
	// 		targetDate: targetDate,
	// 	},
	// 	{
	// 		id: 3,
	// 		description: "Remember DesignPatterns",
	// 		done: false,
	// 		targetDate: targetDate,
	// 	},
	// ];

	return (
		<div className="container">
			<h1>Things you want to do!</h1>
			{message && <div className="alert alert-warning">{message}</div>}
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>Description</th>
							<th>Is done?</th>
							<th>Target Date</th>
							<th>Delete</th>
							<th>Update</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo) => (
							<tr key={todo.id}>
								<td>{todo.description}</td>
								<td>{todo.done.toString()}</td>
								<td>{todo.targetDate.toString()}</td>
								<td>
									<button
										className="btn btn-warning"
										onClick={() => deleteTodo(todo.id)}
									>
										Delete
									</button>
								</td>
								<td>
									<button
										className="btn btn-success"
										onClick={() => updateTodo(todo.id)}
									>
										Update
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="btn btn-success m-3" onClick={addNewTodo}>
					Add New Todo
				</div>
			</div>
		</div>
	);
}

export default ListTodosComponent;
