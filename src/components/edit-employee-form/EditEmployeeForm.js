import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Form, Image, Spinner } from "react-bootstrap";
import {
	fetchAEmployee,
	updateAEmployee,
} from "../../pages/edit-employee/editEmployeeAction";
import { useParams } from "react-router-dom";
// import { ProductCatList } from "../product-category-lists/ProductCatList";

const initialState = {
	name: "",
	employee: [],
};

export const EditEmployeeForm = () => {
	const dispatch = useDispatch();
	const { _id } = useParams();

	const { isLoading, status, message, employee } = useSelector(
		state => state.selectedEmployee
	);
	const [editEmployee, setEditEmployee] = useState(initialState);
	

	useEffect(() => {
		//call api and update our state for a individual product
		if (!editEmployee._id || editEmployee._id !== employee._id) {
			dispatch(fetchAEmployee(_id));
			setEditEmployee(employee);
		}
	}, [dispatch, employee, editEmployee, _id]);

	employee._id !== editEmployee._id && setEditEmployee(employee);

	const handleOnchange = e => {
		const { name, value, checked } = e.target;
		let val = value;
		if (name === "status") {
			val = checked;
		}
		console.log(name, value, checked);
		setEditEmployee({
			...editEmployee,
			[name]: val,
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		const { __v, ...updateEmployee } = editEmployee;
		

		const formData = new FormData();

		//append form data
		Object.keys(updateEmployee).map(key => {
			formData.append(key, updateEmployee[key]);
		});

		
		dispatch(updateAEmployee(formData));
	};


	return (
	
		
		<div>
			hi edit page here
			 {/* {isLoading && <Spinner variant="primary" animation="border" />} 

			 {message && (
				<Alert variant={status === "success" ? "success" : "danger"}>
					{message}
				</Alert>
			)}  */}

			{!employee._id ? (
				<h1>Employee is not found</h1>
			) : (
				
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
							required
							disabled
						/>
						</Form.Group>
						
					<hr />
					
					<Button variant="primary" type="submit">
						Update Product
					</Button>
					
					
				</Form>
				

			
				
			)}
				</div>
		
		
	);
};
