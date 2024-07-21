import { useState } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	useNavigate,
	useParams,
} from "react-router-dom";
import "./TodoApp.css";

export default function TodoApp() {
	return (
		<div className="TodoApp">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginComponent />}></Route>
					<Route path="/login" element={<LoginComponent />}></Route>
					<Route
						path="/welcome/:usernameVariable"
						element={<WelcomeComponent />}
					></Route>
					<Route path="/todos" element={<ListTodosComponent />}></Route>

					<Route path="*" element={<ErrorComponent />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

function LoginComponent() {
	const [username, setUsername] = useState("coderaider");
	const [password, setPassword] = useState("");
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	const navigate = useNavigate();

	function handleUsernameChange(event) {
		setUsername(event.target.value);
	}

	function handlePasswordChange(event) {
		setPassword(event.target.value);
	}

	function handleSubmit() {
		if (username === "coderaider" && password === "dummy") {
			setShowSuccessMessage(true);
			setShowErrorMessage(false);
			navigate(`/welcome/${username}`);
		} else {
			setShowSuccessMessage(false);
			setShowErrorMessage(true);
		}
	}

	return (
		<div className="Login">
			<h1>Time to Login!</h1>
			{showSuccessMessage && (
				<div className="successMessage">Authenticated Successfully</div>
			)}
			{showErrorMessage && (
				<div className="errorMessage">
					Authenticated Failed. Please check your credentials.
				</div>
			)}
			<div className="LoginForm">
				<div>
					<label>Username</label>
					<input
						type="text"
						name="username"
						value={username}
						onChange={handleUsernameChange}
					/>
				</div>
				<div>
					<label>Passowrd</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>
				<div>
					<button type="submit" name="login" onClick={handleSubmit}>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}

function WelcomeComponent() {
	const { usernameVariable } = useParams();

	return (
		<div className="WelcomeComponent">
			<h1>Welcome {usernameVariable}</h1>
			<div>Welcome Component</div>
		</div>
	);
}

function ErrorComponent() {
	return (
		<div className="ErrorComponent">
			<h1>Apologies for the 404.</h1>
			<h2>Reach out to our team at abc@cdf.com</h2>
		</div>
	);
}

function ListTodosComponent() {
	const todos = [
		{
			id: 1,
			description: "Learn SpringBoot",
		},
		{
			id: 2,
			description: "Learn Nginx",
		},
		{
			id: 3,
			description: "Remember DesignPatterns",
		},
	];

	return (
		<div className="ListTodosComponent">
			<h1>Things you want to do!</h1>
			<div>
				<table>
					<thead>
						<tr>
							<td>id</td>
							<td>description</td>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo) => (
							<tr key={todo.id}>
								<td>{todo.id}</td>
								<td>{todo.description}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
