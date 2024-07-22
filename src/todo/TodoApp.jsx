import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
import "./TodoApp.css";

export default function TodoApp() {
	function AuthenticatedRoute({ children }) {
		const authContext = useAuth();
		if (authContext.isAuthenticated) {
			return children;
		}
		return <Navigate to="/" />;
	}

	return (
		<div className="TodoApp">
			<AuthProvider>
				<BrowserRouter>
					<HeaderComponent />
					<Routes>
						<Route path="/" element={<LoginComponent />}></Route>
						<Route path="/login" element={<LoginComponent />}></Route>
						<Route
							path="/welcome/:usernameVariable"
							element={
								<AuthenticatedRoute>
									<WelcomeComponent />
								</AuthenticatedRoute>
							}
						></Route>
						<Route
							path="/todos"
							element={
								<AuthenticatedRoute>
									<ListTodosComponent />
								</AuthenticatedRoute>
							}
						></Route>
						<Route
							path="/logout"
							element={
								<AuthenticatedRoute>
									<LogoutComponent />
								</AuthenticatedRoute>
							}
						></Route>

						<Route path="*" element={<ErrorComponent />}></Route>
					</Routes>
					<FooterComponent />
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}
