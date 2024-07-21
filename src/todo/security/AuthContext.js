import { createContext, useContext, useState } from "react";

// 1. Create a Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// 2. Share the created context with other components
export default function ({ children }) {
	// 3. Put some state in context
	// const [number, setNumber] = useState(0);

	const [isAuthenticated, setAuthenticated] = useState(false);

	return (
		<AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
}
