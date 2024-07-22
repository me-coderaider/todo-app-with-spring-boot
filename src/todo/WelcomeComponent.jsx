import { useParams, Link } from "react-router-dom";
import { retrieveHelloWorldBean } from "./api/HelloWorldApiService";
import { useState } from "react";

function WelcomeComponent() {
	const { usernameVariable } = useParams();

	const [message, setMessage] = useState(null);

	function callHelloWorldAPI() {
		console.log("called");

		// axios
		// 	.get("http://localhost:8080/hello-world")
		// 	.then((response) => successfulResponse(response))
		// 	.catch((error) => errorResponse(error))
		// 	.finally(() => console.log("clean up"));

		retrieveHelloWorldBean()
			.then((response) => successfulResponse(response))
			.catch((error) => errorResponse(error))
			.finally(() => console.log("clean up"));
	}

	function successfulResponse(response) {
		console.log(response);
		setMessage(response.data.message);
	}
	function errorResponse(error) {
		console.log(error);
	}

	return (
		<div className="WelcomeComponent">
			<h1>Welcome {usernameVariable}</h1>
			<div>
				Manage your todos
				<Link to="/todos">Todos</Link>
			</div>
			<div>
				<button className="btn btn-success m-5" onClick={callHelloWorldAPI}>
					Call REST API
				</button>
			</div>
			<div className="text-info">{message}</div>
		</div>
	);
}

export default WelcomeComponent;
