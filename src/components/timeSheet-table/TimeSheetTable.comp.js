import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {Form, Col, Jumbotron, Button, Spinner,Alert, Table} from 'react-bootstrap'
import {addNewShift} from '../../pages/shifts/shiftsAction'
import {fetchShifts} from '../../pages/shifts/shiftsAction'
// import { AddEmployee } from '../add-employee/AddEmployee'




const initialState = {
  name: "puja",
  datetime: "12-05-2020",
  employees: [],
}
export const TimeSheetTable = () => {
  const dispatch = useDispatch()

  const [timesheet, setTimesheet] = useState(initialState)

  const { isLoading, shiftResponse, shiftsList} = useSelector(state => state.shifts)
  // const { isLoading, shiftResponse} = useSelector(state => state.shiftsList)
// console.log(shiftsList)

useEffect(() => {
  !shiftsList && dispatch(fetchShifts());
}, [dispatch]);

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

    // dispatch(fetchShifts(shiftsList))

    
    
    
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

      <Form.Label>Select Employees</Form.Label>
      {/* <AddEmployee/>  */}
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
      name="date"
      type="date"
      value={timesheet.datetime}
      onChange={handleOnChange}

 />
    </Form.Group>

     <Form.Group as={Col} controlId = "formGridState">
      <Form.Label>Shift Time</Form.Label>
      <Form.Control
       name="time"
       type="time"
       value={timesheet.time}
       onChange={handleOnChange}
        />
    </Form.Group> 

    <Button type="submit" variant="info" block>Add</Button>

      </Form>
      </Jumbotron>
      {/* <AddShiftsForm/>  */}
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>shift Date and Time</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
          
        
      {shiftsList?.length ? (
          shiftsList.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>
                {row.name}
              </td>
              <td>{row.datetime}</td>
              <td><Button variant="info">Delete</Button></td>
             
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center">
              No shifts to show{" "}
            </td>
          </tr>
        )}
       
       </tbody>
     </Table>
      </div>
 
     
    )
    
}
