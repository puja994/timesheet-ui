import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Jumbotron, Form, Button, ListGroup, Spinner, Alert, Table} from 'react-bootstrap'
import './addEmployee.style.css'
import {addNewEmployee} from '../../pages/employee/employeeAction'


const initialState = {
  name:"",
  email:"",
  // date: "",
}

export const AddEmployee = () => {
  const dispatch = useDispatch()

  const [addEmployee, setAddEmployee] = useState(initialState)
  const { isLoading, employeeResponse} = useSelector(state => state.employee)

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
      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
{/*           
      {/* {addEmployee.length ? (
          addEmployee.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>
                {row.name}
              </td>
              <td>{row.email}</td>
             
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center">
              No shifts to show{" "}
            </td>
          </tr>
        )} */}
       
       </tbody> 
     </Table>
     </Jumbotron>

   {/* <ListGroup>
  <ListGroup.Item>Employee details inserted here</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup> */}


        </div>
        
    )
}
