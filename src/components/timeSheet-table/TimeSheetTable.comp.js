import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {Form, Col, Jumbotron, Button, Spinner,Alert} from 'react-bootstrap'
import {addNewShift} from '../../pages/shifts/shiftsAction'


const initialState = {
  name: "puja",
  datetime: "",
}
export const TimeSheetTable = () => {
  const dispatch = useDispatch()

  const [timesheet, setTimesheet] = useState(initialState)

  const { isLoading, shiftResponse} = useSelector(state => state.shifts)

  const handleOnChange = e => {
    const {name, value} = e.target
  

    setTimesheet({
      ...timesheet,
      [name]: value,
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    dispatch(addNewShift(timesheet))

    
    
    
  }

  const {message,status} = shiftResponse


    return (
    <div>
      <h1>Add Shifts</h1>
      <Jumbotron>
      {isLoading && <Spinner variant="primary" animation="border" />}

{message && (
  <Alert variant={status === "success" ? "success" : "danger"}>
    {message}
  </Alert>
)}
      <Form onSubmit= {handleOnSubmit}>

      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Name</Form.Label>
      <Form.Control 
      as="select" 
      name="name"
      value= {timesheet.name}
      onChange={handleOnChange}
      defaultValue="Choose...">
        <option>Choose...</option>
        <option>puja</option>
        <option>sita</option>
        <option>rita</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId = "formGridState">
      <Form.Label>Shift Date and Time</Form.Label>
      <Form.Control 
      // type="datetime-local"
      name="datetime"
      value={timesheet.datetime}
      onChange={handleOnChange}

 />
    </Form.Group>

    {/* <Form.Group as={Col} controlId = "formGridState">
      <Form.Label>Shift Time</Form.Label>
      <Form.Control
       name="time"
       value={timesheet.time}
       onChange={handleOnChange}
        />
    </Form.Group> */}

    <Button type="submit" variant="info" block>Add</Button>

      </Form>
      </Jumbotron>
      </div>
 
     
    )
    
}
