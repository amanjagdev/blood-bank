import React, { useEffect, useState } from "react";
import {
	Container,
	Jumbotron,
	Row,
	Dropdown,
	FormControl,
	Button,
	Spinner,
} from "react-bootstrap";

import firebase from "../firebase/firebase";

//components
import DonorCard from "../components/DonorCard";
const Home = () => {
	const [donors, setDonors] = useState(null);
	const db = firebase.firestore();

	useEffect(() => {
		db.collection("donors")
			.get()
			.then((res) => {
				let tempData = [];
				res.forEach((donor) => {
					tempData.push(donor.data());
				});
				console.log(tempData);
				setDonors(tempData);
			});
	}, []);

	return (
		<div className="Home" style={{ minHeight: "100vh" }}>
			<Jumbotron fluid>
				<Container>
					<h1>Welcome to the Graphic Era Blood Portal</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Magnam, enim tempore fugiat vero ipsam repudiandae.
					</p>
				</Container>
			</Jumbotron>
			<Container style={{ marginTop: "2rem" }}>
				<div className="search-box" style={{ marginBottom: "3rem" }}>
					<Row>
						<FormControl
							placeholder="search text"
							aria-label="search text"
							aria-describedby="basic-addon1"
						/>
						<Dropdown>
							<Dropdown.Toggle
								variant="success"
								id="dropdown-basic">
								Search By :
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">
									Name
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2">
									Department
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown>
							<Dropdown.Toggle
								variant="success"
								id="dropdown-basic">
								Blood Group :
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">
									AB+
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2">
									AB-
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2">
									B+
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2">
									B-
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2">
									O+
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2">
									O-
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2">
									A+
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2">
									A-
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Button variant="primary">Search</Button>
					</Row>
				</div>

				<Row>
					{donors ? (
						donors.map((donor) => (
							<DonorCard key={donor.rollId} {...donor} />
						))
					) : (
						<Spinner animation="border" variant="danger" />
					)}
				</Row>
			</Container>
		</div>
	);
};

export default Home;
