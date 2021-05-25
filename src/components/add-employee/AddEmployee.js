import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Jumbotron, Form, Button, ListGroup, Spinner, Alert, Table} from 'react-bootstrap'
import './addEmployee.style.css'
import {addNewEmployee, fetchEmployees, deleteEmployee} from '../../pages/employee/employeeAction'
// import {toggleEmployeeEditModal, selectAEmployee} from '../../pages/employee/employeeSlice'
// import {EditEmployeeForm} from '../editEmployee/EditEmployeeForm'


const initialState = {
  name:"",
  email:"",
  
}

export const AddEmployee = () => {
  const dispatch = useDispatch()

  const [addEmployee, setAddEmployee] = useState(initialState)
  const { isLoading, employeeResponse, employeeList, deleteMsg} = useSelector(state => state.employee)
  // const { employeeLists, selectedEmployee } = useSelector(
	// 	state => state.employee
	// );

	// const [showForm, setShowForm] = useState("");

  const handleOnDeleteClicked = _id  => {
    dispatch(deleteEmployee(_id));
  }

  useEffect(() => {
    !employeeList && dispatch(fetchEmployees());
  }, [dispatch]);

  useEffect(() => {
		dispatch(fetchEmployees());
	}, []);

const handleOnChange = e => {
const {name, value} = e.target

setAddEmployee({
  ...addEmployee,
  [name]: value
  
})
}

const handleOnSubmit = e =>{
  e.preventDefault()
  console.log(addEmployee)
  dispatch(addNewEmployee(addEmployee))
}

// const handleEdit = _id => {
//   dispatch(toggleEmployeeEditModal());
//   // console.log(_id);
//   // const employeeItme = employeeLists.filter(row => row._id === _id)[0];
//   dispatch(selectAEmployee());

//   showForm === _id ? setShowForm("") : setShowForm(_id);
// }


const {message,status} = employeeResponse

    return (
    
        <div>
            <h1 variant= "info"style={{color:"black",textAlign:"center"}}>Added Employees displayed here</h1>
        <Jumbotron className="employee-form"> 
        {isLoading && <Spinner variant="primary" animation="border" />}

{message && (
  <Alert variant={status === "success" ? "success" : "danger"}>
    {message}
  </Alert>
)}

       

        <Form onSubmit={handleOnSubmit}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control
    name="name"
    type="text"
    value= {addEmployee.name}
    onChange={handleOnChange}
    placeholder="Full Name" 
    required
      />

    <Form.Label>Email</Form.Label>
    <Form.Control 
    name="email"
    value={addEmployee.email}
    onChange={handleOnChange}
    type="email" 
    placeholder="Email" 
    required
    />

    {/* <Form.Label>Joined Date</Form.Label>
    <Form.Control
    name="date"
    value={addEmployee.date}
    onChange={handleOnChange}
     type="date" 
     placeholder="Joined Date" /> */}
  </Form.Group>
  <Button type="submit">Add Employee</Button>
  </Form>
   </Jumbotron>
   <hr/>
   <h1 variant= "info"style={{color:"black",textAlign:"center"}}>Added Employees displayed here</h1>
   <Jumbotron>
   {isLoading && <Spinner variant="primary" animation="border" />}
   {deleteMsg && (
  <Alert variant={status === "success" ? "success" : "danger"}>
    {deleteMsg}
  </Alert>
)}
      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Employee Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
          
      {/* {employeeList.length ? (
          employeeList.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>
                {row.name}
              </td>
              <td>{row.email}</td>
              <td><Button>Edit</Button></td>
              <td><Button 
              onClick = {()=> handleOnDeleteClicked(row._id)}
              variant="info"
              >Delete</Button></td>
             
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="text-center">
              No shifts to show{" "}
            </td>
          </tr>
        )} */}
        {/* <EditEmployeeForm/> */}
       
       { (
          employeeList.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>
                {row.name}
              </td>
              <td>{row.email}</td>
              <td><Button variant="info" >Edit</Button></td>
              <td><Button 
              onClick = {()=> handleOnDeleteClicked(row._id)}
              variant="info"
              >Delete</Button></td>
             
            </tr>
          ))
        ) }
       </tbody> 
     </Table>
     </Jumbotron>



        </div>
        
    )
}
