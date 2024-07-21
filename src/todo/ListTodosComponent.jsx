function ListTodosComponent() {
	const today = new Date();

	const targetDate = new Date(
		today.getFullYear() + 1,
		today.getMonth(),
		today.getDate()
	);

	const todos = [
		{
			id: 1,
			description: "Learn SpringBoot",
			done: false,
			targetDate: targetDate,
		},
		{
			id: 2,
			description: "Learn Nginx",
			done: false,
			targetDate: targetDate,
		},
		{
			id: 3,
			description: "Remember DesignPatterns",
			done: false,
			targetDate: targetDate,
		},
	];

	return (
		<div className="container">
			<h1>Things you want to do!</h1>
			<div>
				<table className="table">
					<thead>
						<tr>
							<td>Id</td>
							<td>Description</td>
							<td>Is done?</td>
							<td>Target Date</td>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo) => (
							<tr key={todo.id}>
								<td>{todo.id}</td>
								<td>{todo.description}</td>
								<td>{todo.done.toString()}</td>
								<td>{todo.targetDate.toDateString()}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default ListTodosComponent;
