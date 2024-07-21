import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
function LoginComponent() {
	const [username, setUsername] = useState("coderaider");
	const [password, setPassword] = useState("");
	// const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	const authContext = useAuth();
	const navigate = useNavigate();

	function handleUsernameChange(event) {
		setUsername(event.target.value);
	}

	function handlePasswordChange(event) {
		setPassword(event.target.value);
	}

	function handleSubmit() {
		if (authContext.login(username, password)) {
			// setShowSuccessMessage(true);
			// setShowErrorMessage(false);
			navigate(`/welcome/${username}`);
		} else {
			// setShowSuccessMessage(false);
			setShowErrorMessage(true);
		}
	}

	return (
		<div className="Login">
			<h1>Time to Login!</h1>
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

export default LoginComponent;
