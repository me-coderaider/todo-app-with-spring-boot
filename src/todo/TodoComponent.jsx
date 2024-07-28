import { useParams } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { retrieveTodoApi } from "./api/TodoApiService";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";

function TodoComponent() {
	const { id } = useParams();

	const [description, setDescription] = useState("");
	const [targetDate, setTargetDate] = useState("");

	const authContext = useAuth();
	const username = authContext.username;

	//we need to call the retrieveTodos at the Load of the page and only when the id changes
	// so, we can use useEffect() here.
	useEffect(() => retrieveTodos(), [id]);

	function retrieveTodos() {
		retrieveTodoApi(username, id)
			.then((response) => {
				setDescription(response.data.description);
				setTargetDate(response.data.targetDate);
			})
			.catch((error) => console.log(error));
	}

	function onSubmit(values) {
		console.log("update data", values);
	}

	return (
		<div className="TodoComponent">
			<h1>Enter Todo Details</h1>
			<div>
				<Formik
					initialValues={{ description, targetDate }}
					enableReinitialize={true}
					onSubmit={onSubmit}
				>
					{(props) => (
						<Form>
							<fieldset className="form-group">
								<label>Description</label>
								<Field
									type="text"
									className="form-control"
									name="description"
								></Field>
							</fieldset>
							<fieldset className="form-group">
								<label>Target Date</label>
								<Field
									type="date"
									className="form-control"
									name="targetDate"
								></Field>
							</fieldset>
							<div>
								<button className="btn btn-success m-5" type="submit">
									Save
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default TodoComponent;
