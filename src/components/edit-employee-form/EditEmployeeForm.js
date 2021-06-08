import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Form, Image, Spinner } from "react-bootstrap";
import {
	fetchAEmployee,
	updateAEmployee,
} from "../../pages/edit-employee/editEmployeeAction";
import { useParams } from "react-router-dom";


const initialState = {
	name: "",
	email: "",
};

export const EditEmployeeForm = () => {
	const dispatch = useDispatch();
	const { _id } = useParams();
	console.log(_id, "frmedit")

	const { isLoading, updateSuccessResponse, employee } = useSelector(
		state => state.editEmployee
	);
	const [editEmployee, setEditEmployee] = useState(initialState);
	

	useEffect(() => {
		//call api and update our state for a individual product
		// if (!editEmployee._id || editEmployee._id !== employee._id) {
			dispatch(fetchAEmployee(_id));
		
		// }
	}, [ _id]);

	// employee._id !== editEmployee._id && setEditEmployee(employee);

	const handleOnchange = e => {
		const { name, value, checked } = e.target;
		let val = value;
		// if (name === "status") {
		// 	val = checked;
		// }
		// // if (name === "status") {
		// 	val = checked;
		// }
		// console.log(name, value, checked);
		setEditEmployee({
			...editEmployee,
			[name]: val,
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		// const { __v, ...updateEmployee } = editEmployee;
		

		const formData = {
			editEmployee, _id
		}
		console.log(editEmployee)
   
		
		dispatch(updateAEmployee(formData));
	};


	return (
	
		
		<div>
			<h2 variant= "info"style={{color:"black",textAlign:"center"}}>Edit Employee</h2>
			
			 {isLoading && <Spinner variant="primary" animation="border" />} 

			 {updateSuccessResponse.message && (
				<Alert variant={updateSuccessResponse.status === "success" ? "success" : "danger"}>
					{updateSuccessResponse.message}
				</Alert>
			)} 
				
				<Form onSubmit={handleOnSubmit} >
					
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control
							name="name"
							type="text"
							value={editEmployee.name}
							onChange={handleOnchange}
							placeholder="Enter Employee name"
							required
						/>
					
					</Form.Group>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control
							name="email"
							type="email"
							value={editEmployee.email}
							onChange={handleOnchange}
							placeholder="Enter Email here"
							required
							
						/>
						</Form.Group>
						
					<hr />
					
					<Button variant="info" type="submit">
						Update Employee
					</Button>
					
					
				</Form> 
				

			
				
			
				</div>
		
		
	)
};
