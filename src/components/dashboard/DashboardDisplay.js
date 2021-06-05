import React from 'react'
import {Card, Jumbotron , Button, Container} from 'react-bootstrap'
import './dashboard.css'
import first from '../assets/shifts.png'
import middle from '../assets/data.png'
import second from '../assets/data.png'
import {Link} from 'react-router-dom'



export const DashboardDisplay = () => {
  
  
    return (
      
      <div>
        
          <h1 style={{color:"sky blue",textAlign:"center"}}>Welcome to manager Dashboard!</h1>
        
          <Jumbotron className="jumbo-display">

          <Card style={{ width: '18rem' }} bg="info">
  {/* <Card.Img variant="top"  src="./data.png/100px180" /> */}
  <img src={first} />


  <Card.Body>
    <Card.Title>Employee</Card.Title>
    <Card.Text>
      In this employee page you can add new employee with their name and email address.
    </Card.Text>
    <Button variant="dark"> <Link to={`/employee`}>Add New Employee</Link></Button>
    
  </Card.Body>
</Card>


<Card style={{ width: '18rem' }} bg="info">
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <img src={first} />
  <Card.Body>
    <Card.Title>How to use </Card.Title>
    <Card.Text>
      If you have new employee add them through employee page, after that employee will get listed on shifts page where you can select employee and assign shifts for them.
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>

       <Card style={{ width: '18rem' }} bg="info">
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <img src={second} />
  <Card.Body>
    <Card.Title>Time Sheet</Card.Title>
    <Card.Text>
      In this page you can assign shift date, start time and end time for the desired employee.
    </Card.Text>
    <Button variant="dark"><Link to={`/shifts`}>Add New Shifts</Link></Button>
  </Card.Body>
</Card>

    
       </Jumbotron>

       {/* <Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron> */}
     

    
            
            </div>
        
    )
}
