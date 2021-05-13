import React, {useState} from 'react'
import { Jumbotron, Form, Button, ListGroup} from 'react-bootstrap'
import './addEmployee.style.css'


const initialState = {
  name:"",
  email:"",
  date: "",
}

export const AddEmployee = () => {

  const [addEmployee, setAddEmployee] = useState(initialState)

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
}


    return (
        <div>
            <h1 variant= "info"style={{color:"black",textAlign:"center"}}>Added Employees displayed here</h1>
        <Jumbotron className="employee-form"> 

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

    <Form.Label>Joined Date</Form.Label>
    <Form.Control
    name="date"
    value={addEmployee.date}
    onChange={handleOnChange}
     type="date" 
     placeholder="Joined Date" />
  </Form.Group>
  <Button>Add Employee</Button>
  </Form>
   </Jumbotron>
   <hr/>
   <h1 variant= "info"style={{color:"black",textAlign:"center"}}>Added Employees displayed here</h1>
   <ListGroup>
  <ListGroup.Item>Employee details inserted here</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>

        </div>
    )
}
