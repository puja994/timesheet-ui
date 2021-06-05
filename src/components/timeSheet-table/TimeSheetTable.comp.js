import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {Form, Col, Jumbotron, Button, Spinner,Alert, Table} from 'react-bootstrap'
import {addNewShift} from '../../pages/shifts/shiftsAction'
import {fetchShifts, deleteShift} from '../../pages/shifts/shiftsAction'
// import { AddEmployee } from '../add-employee/AddEmployee'
import {ShiftEmployeeList} from '../shift-employee-lists/ShiftEmployeeList'
import './table.css'



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
  const { employeeList } = useSelector(state => state.employee);


useEffect(() => {
  !shiftsList && dispatch(fetchShifts());
  dispatch(fetchShifts());
}, [dispatch]);



const handleOnDeleteClicked = _id  => {
  dispatch(deleteShift(_id));
}



  const handleOnChange = e => {
    const {name, value} = e.target
  

    setTimesheet({
      ...timesheet,
      [name]: value,
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    if(!timesheet.name.length)
      return alert("Please select the names")

   const empInfo = timesheet.name.map(id => {
     return {
       eId: id,
       name: employeeList.filter(row=> row._id === id)[0].name
     }
   })
   
   const {name, ...rest} = timesheet
   const newTimeSet = {
     ...rest,
     empInfo
   }
    dispatch(addNewShift(newTimeSet))
    

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
 
  console.log(shiftsList, ">>>>>")


    return (
    <div>
      <h1 style={{color:"black",textAlign:"center"}}>Add Shifts</h1>
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
       
      <ShiftEmployeeList
      onCatSelect={onCatSelect}
      selectedCatIds={timesheet.name}

      />

    </Form.Group>

    <Form.Group as={Col} controlId = "formGridState">
      <Form.Label>Shift Date</Form.Label>
      <Form.Control 
      name="date"
      type="date"
      min="2021-06-01"
      max="2021-06-30"
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
              <td>
                <ul>
                {row.empInfo.map(emp => (
                  <li>
                    {emp.name}
                  </li>
                ))}
                </ul>
              </td>
              <td>{row.date}</td>
              <td>{row.startTime}</td>
              <td>{row.endTime}</td>
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
