import { useParams, Link } from "react-router-dom";
function WelcomeComponent() {
	const { usernameVariable } = useParams();

	return (
		<div className="WelcomeComponent">
			<h1>Welcome {usernameVariable}</h1>
			<div>
				Manage your todos
				<Link to="/todos">Todos</Link>
			</div>
		</div>
	);
}

export default WelcomeComponent;
