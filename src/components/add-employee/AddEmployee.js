import React from 'react'
import { Jumbotron, Form, Button, ListGroup} from 'react-bootstrap'
import './addEmployee.style.css'

export const AddEmployee = () => {
    return (
        <div>
            <h1 variant= "info"style={{color:"black",textAlign:"center"}}>Added Employees displayed here</h1>
        <Jumbotron className="employee-form"> 

        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Full Name" />

    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" />


    <Form.Label>Phone</Form.Label>
    <Form.Control type="number" placeholder="Phone Number" />

    <Form.Label>Joined Date</Form.Label>
    <Form.Control type="date" placeholder="Joined Date" />
  </Form.Group>
  <Button>Add Employee</Button>
  </Form>
   </Jumbotron>
   <hr/>
   <h1 variant= "info"style={{color:"black",textAlign:"center"}}>Added Employees displayed here</h1>
   <ListGroup>
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>

        </div>
    )
}
