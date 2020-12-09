import React from "react";
import { Card, Col } from "react-bootstrap";

const DonorCard = ({
	name,
	rollId,
	department,
	bloodGroup,
	donatedBloodAmmount,
	phoneNumber,
	emailId,
}) => {
	return (
		<Col>
			<div className="DonorCard">
				<Card style={{ width: "18rem", marginBottom: "2rem" }}>
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							Blood Group : {bloodGroup}
						</Card.Subtitle>
						<Card.Text>
							<div className="rollno">Roll No : {rollId}</div>
							<div className="rollno">
								Deapartement : {department}
							</div>
							<div className="rollno">
								Donated Blood Ammout : {donatedBloodAmmount}{" "}
								Litres
							</div>
							<div className="rollno">
								Phone Number : {phoneNumber}
							</div>
							<div className="rollno">Email ID: {emailId}</div>
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</Col>
	);
};

export default DonorCard;
