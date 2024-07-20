// import { useState } from "react";
import PropTypes from "prop-types";
export default function CounterButton({
	by,
	incrementMethod,
	decrementMethod,
}) {
	// const buttonStyle = {
	// 	fontSize: "30px",
	// 	backgroundColor: "#00a5ab",
	// 	width: "100px",
	// 	margin: "10px",
	// 	color: "white",
	// 	borderRadius: "30px",
	// };
	// const [count, setCount] = useState(0);
	// const state = useState(0);

	// function incrementCounterFunction() {
	// 	// state[1](state[0] + 1);

	// 	// console.log(state);
	// 	// console.log(state[0]);
	// 	// console.log(state[1]);

	// 	// setCount(count + by);
	// 	incrementMethod(by);
	// }
	// function decrementCounterFunction() {
	// 	// setCount(count - by);
	// 	decrementMethod(by);
	// }

	return (
		<>
			<div>
				{/* <button className="counterButton" onClick={incrementCounterFunction}>
					+{by}
				</button>
				<button className="counterButton" onClick={decrementCounterFunction}>
					-{by}
				</button> */}
				<button className="counterButton" onClick={() => incrementMethod(by)}>
					+{by}
				</button>
				<button className="counterButton" onClick={() => decrementMethod(by)}>
					-{by}
				</button>
			</div>
		</>
	);
}

CounterButton.propTypes = {
	by: PropTypes.number,
};

// CounterButton.defaultProps = {
// 	by: 7,
// };
