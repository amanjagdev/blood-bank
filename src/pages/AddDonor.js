import React from "react";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";

const AddDonor = () => {
	const addDonor = () => {};

	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<h1>Add Donor Now</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Quos, tempora!
					</p>
				</Container>
			</Jumbotron>

			<Container>
				<Form style={{ marginBottom: "2rem" }}>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter Name" />
					</Form.Group>

					<Form.Group>
						<Form.Label>Email Address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group>
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							type="number"
							placeholder="Enter phone number"
						/>
						<Form.Text className="text-muted">
							We'll never share your phone number with anyone
							else.
						</Form.Text>
					</Form.Group>

					<Form.Group>
						<Form.Label>RollId</Form.Label>
						<Form.Control type="text" placeholder="Enter RollId" />
					</Form.Group>

					<Form.Group>
						<Form.Label>Department</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Department"
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Blood Group</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter BloodGroup"
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Donated Ammount</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Donated Ammount"
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Date of Donation</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Date of Donation"
						/>
					</Form.Group>

					<Form.Group>
						<Form.Check
							type="checkbox"
							label="Agree to all terms and conditions"
						/>
					</Form.Group>
					<Button
						variant="danger"
						type="submit"
						onCLick={() => addDonor()}>
						Submit
					</Button>
				</Form>
			</Container>
		</div>
	);
};

export default AddDonor;
