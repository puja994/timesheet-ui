import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {Form, Col, Jumbotron, Button, Spinner,Alert, Table} from 'react-bootstrap'
import {addNewShift} from '../../pages/shifts/shiftsAction'
import {fetchShifts, deleteShift} from '../../pages/shifts/shiftsAction'
// import { AddEmployee } from '../add-employee/AddEmployee'
import {ShiftEmployeeList} from '../shift-employee-lists/ShiftEmployeeList'







const initialState = {
  name: [],
  date: new Date().toLocaleDateString(),
  startTime: new Date().toLocaleTimeString(),
  endTime: new Date().toLocaleTimeString()
  // employees: [],
}
export const TimeSheetTable = () => {
  const dispatch = useDispatch()

  const [timesheet, setTimesheet] = useState(initialState)

  const { isLoading, shiftResponse, shiftsList, deleteMsg} = useSelector(state => state.shifts)
  // const { isLoading, shiftResponse} = useSelector(state => state.shiftsList)
// console.log(shiftsList)
// const Message = ({ variant, children }) => {
//   const [timeOut, setTimeOut] = useState(null)

//   setTimeout(() => {
//     setTimeOut(1)
//   }, 3000)



const handleOnDeleteClicked = _id  => {
  dispatch(deleteShift(_id));
}

useEffect(() => {
  !shiftsList && dispatch(fetchShifts());
}, [dispatch]);

useEffect(() => {
  dispatch(fetchShifts());
}, []);
  const handleOnChange = e => {
    const {name, value} = e.target
  

    setTimesheet({
      ...timesheet,
      [name]: value,
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()
console.log(timesheet)
    dispatch(addNewShift(timesheet))
    

    // dispatch(fetchShifts(shiftsList))
  }

  const onCatSelect = e => {
		const { checked, value } = e.target;
		if (checked) {
			//PUT _ID IN SIDE THE ARRAY
			setTimesheet({
				...timesheet,
				name: [...timesheet.name, value],
			});
		} else {
			//take _id out of the array
			const updatedCatIds = timesheet.name.filter(id => id !== value);

			setTimesheet({
				...timesheet,
				name: updatedCatIds,
			});
		}
	};

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
      {/* <Form.Control 
      as="select" 
      name="name"
      value= {timesheet.name}
      onChange={handleOnChange}
      defaultValue="Choose...">
        <option>Choose...</option>
        <option>puja</option>
        <option>sita</option>
        <option>rita</option>
      </Form.Control> */}
      <ShiftEmployeeList
      onCatSelect={onCatSelect}
      selectedCatIds={timesheet.name}

      />

    </Form.Group>

    <Form.Group as={Col} controlId = "formGridState">
      <Form.Label>Shift Date</Form.Label>
      <Form.Control 
      // type="datetime-local"
      name="date"
      type="date"
      value={timesheet.date}
      onChange={handleOnChange}

 />
    </Form.Group>

     <Form.Group as={Col} controlId = "formGridState">
      <Form.Label>Shift Start Time</Form.Label>
      <Form.Control
       name="startTime"
       type="time"
       value={timesheet.startTime}
       onChange={handleOnChange}
        />
    </Form.Group> 


    <Form.Group as={Col} controlId = "formGridState">
      <Form.Label>Shift End Time</Form.Label>
      <Form.Control
       name="endTime"
       type="time"
       value={timesheet.endTime}
       onChange={handleOnChange}
        />
    </Form.Group> 

    <Button type="submit" variant="info" block>Add</Button>

      </Form>
      </Jumbotron>
      {/* <AddShiftsForm/>  */}

               
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
          <th>shift Date </th>
          <th>shift Start Time  </th>
          <th>shift End Time  </th>
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
              <td>{row.date}</td>
              <td>{row.time}</td>
              <td>{row.time}</td>
              <td><Button 
              onClick = {()=> handleOnDeleteClicked(row._id)}
              variant="info"
              >Delete</Button></td>
             
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              No shifts to show{" "}
            </td>
          </tr>
        )}
       
       </tbody>
     </Table>
      </div>
 
     
    )
    
}
