import { useState } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	useNavigate,
	useParams,
	Link,
} from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider from "./security/AuthContext";
import "./TodoApp.css";

export default function TodoApp() {
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
							element={<WelcomeComponent />}
						></Route>
						<Route path="/todos" element={<ListTodosComponent />}></Route>
						<Route path="/logout" element={<LogoutComponent />}></Route>

						<Route path="*" element={<ErrorComponent />}></Route>
					</Routes>
					<FooterComponent />
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}
