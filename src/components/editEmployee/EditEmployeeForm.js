// import React , {useState, useEffect} from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import {Form, Col, Button, Spinner, Alert, Jumbotron} from 'react-bootstrap'
// import ModalBox from "../modal/ModalBox"
// import {toggleEmployeeEditModal} from '../../pages/employee/employeeSlice'
// import {employeeUpdate} from '../../pages/employee/employeeAction'


// const initialState = {
// 	name: "",
// 	// email: "",
// };
// export const EditEmployeeForm = () => {
//   const dispatch = useDispatch()

//   const {
// 		isLoading,
// 		updateEmployeeResponse,
// 		selectedEmployee,
// 		employeeList,
// 		show,
// 	} = useSelector(state => state.employee);

// 	const [employee, setEmployee] = useState(initialState);

// 	useEffect(() => {
// 		setEmployee(selectedEmployee);
// 	}, [dispatch, selectedEmployee]);

// 	const handleOnChange = e => {
// 		const { name, value } = e.target;
// 		console.log(name, value);

// 		setEmployee({
// 			...employee,
// 			[name]: value,
// 		});
// 	};

// 	const handleOnSubmit = e => {
// 		e.preventDefault();

// 		const updateEmployee = {
// 			_id: employee._id,
// 			name: employee.name,
//       // email: employee.email
// 			// parentCa: category.parentCat ? category.parentCat : null,
// 		};


// 		dispatch(employeeUpdate(updateEmployee));
// 	};

// 	const toggleModal = e => {
// 		dispatch(toggleEmployeeEditModal());
// 	}


//     return (
        
//         <ModalBox show={show} toggleModal={toggleModal}>

// {isLoading && <Spinner variant="primary" animation="border" />}

// {updateEmployeeResponse?.message && (
//   <Alert
//     variant={
//       updateEmployeeResponse?.status === "success" ? "success" : "danger"
//     }
//   >
//     {updateEmployeeResponse?.message}
//   </Alert>
// )}
            

  
//         <Form onSubmit={handleOnSubmit}>
//   <Form.Group controlId="exampleForm.ControlInput1">
//     <Form.Label>Full Name</Form.Label>
//     <Form.Control
//     name="name"
//     type="text"
//     value= {employee.name}
//     onChange={handleOnChange}
//     placeholder="Full Name" 
//     required
//       />

//     <Form.Label>Email</Form.Label>
//     <Form.Control 
//     name="email"
//     value={employee.email}
//     onChange={handleOnChange}
//     type="email" 
//     placeholder="Email" 
//     required
//     />  
//      </Form.Group>
//      <Button variant="primary" type="submit">
// 							Submit
// 						</Button>
//      </Form>
    


            
//         </ModalBox>
       
//     )
// }
