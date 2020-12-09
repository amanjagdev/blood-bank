import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const NavBar = ({ history }) => {
	return (
		<div>
			<Navbar bg="danger" expand="lg" variant="dark">
				<Navbar.Brand href="#home">
					GEU Blood Donation System
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link onClick={() => history.push("/")}>
							Home
						</Nav.Link>
						<Nav.Link onClick={() => history.push("/adddonor")}>
							Add Donor
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default withRouter(NavBar);
