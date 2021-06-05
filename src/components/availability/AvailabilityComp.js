import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import {fetchAvailability} from '../../pages/availability/availabilityAction'
import {Jumbotron, Spinner, Table} from 'react-bootstrap'
import { useHistory } from "react-router-dom"

export const AvailabilityComp = () => {

    const history = useHistory();

    const { isLoading, availabilityList, status, message} = useSelector(
      (state) => state.availability
    )
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchAvailability());
    }, [dispatch]);

    
    return (
        <div>
          <Jumbotron>
            <h3 variant= "info"style={{color:"black",textAlign:"center"}}>Shifts Request By Employees</h3>
            
             {isLoading && <Spinner variant="primary" animation="border" />}
             <Table striped bordered hover>
                  <thead>
                    <tr>
                      {/* <th>Name</th>
                      <th>Date</th>
                      <th>start time</th>
                      <th>end time</th> */}
                      
                    </tr>
                  </thead>
             {availabilityList?.map((item,i)=>{
                 return(
                 
                  <tbody>
                    <tr>
                      <td> <span style={{color:"green"}}> <strong>{item.name}  </strong></span>  {""}  sent you shift request</td>
                      <td><strong>Date:</strong>  {item.date}</td>
                      <td> <strong>Start Time:</strong>   {item.startTime}</td>
                      <td> <strong>End Time</strong>  {item.endTime}</td>
                    </tr>
                    
                    
                  </tbody>
               
                
                 )
             })}
              </Table>
             
             </Jumbotron>

        </div>
    )
}
