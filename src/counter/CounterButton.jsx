import { useState } from "react";

import CounterButton1 from "./CounterButton1";
import "./Counter.css";

export default function Counter() {
	const [count, setCount] = useState(0);

	function incrementCountParentFunction(by) {
		setCount(count + by);
	}
	function decrementCountParentFunction(by) {
		setCount(count - by);
	}

	function resetCount() {
		setCount(0);
	}

	return (
		<>
			<span className="count">{count}</span>
			<CounterButton1
				by={1}
				incrementMethod={incrementCountParentFunction}
				decrementMethod={decrementCountParentFunction}
			/>
			<CounterButton1
				by={2}
				incrementMethod={incrementCountParentFunction}
				decrementMethod={decrementCountParentFunction}
			/>
			<CounterButton1
				by={5}
				incrementMethod={incrementCountParentFunction}
				decrementMethod={decrementCountParentFunction}
			/>

			<button onClick={resetCount}>Reset</button>
		</>
	);
}
