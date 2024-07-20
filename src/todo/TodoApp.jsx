import { useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import "./TodoApp.css";

export default function TodoApp() {
	return (
		<div className="TodoApp">
			Todo Management Application
			<LoginComponent />
		</div>
	);
}

function LoginComponent() {
	const [username, setUsername] = useState("coderaider");
	const [password, setPassword] = useState("");
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

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
		} else {
			setShowSuccessMessage(false);
			setShowErrorMessage(true);
		}
	}

	return (
		<div className="Login">
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
	return <div>Welcome Component</div>;
}
