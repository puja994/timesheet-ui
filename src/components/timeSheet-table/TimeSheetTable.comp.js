import React from 'react'
import {Form, Col, Jumbotron} from 'react-bootstrap'

export const TimeSheetTable = () => {
    return (
    <div>
      <h1>Add Shifts</h1>
      <Jumbotron>
      <Form>

      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Name</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId = "formGridState">
      <Form.label>Shift Date</Form.label>
      <Form.Control></Form.Control>
    </Form.Group>

      </Form>
      </Jumbotron>
      </div>
 
     
    )
    
}
