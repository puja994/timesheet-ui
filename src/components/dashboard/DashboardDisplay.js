import React from 'react'
import {Card, Jumbotron , Button, Container} from 'react-bootstrap'
import './dashboard.css'
import first from '../assets/shifts.png'
import middle from '../assets/data.png'
import second from '../assets/data.png'



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
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="success">Add New Employee</Button>
  </Card.Body>
</Card>


<Card style={{ width: '18rem' }} bg="info">
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <img src={first} />
  <Card.Body>
    <Card.Title>Performance Values</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

       <Card style={{ width: '18rem' }} bg="info">
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <img src={second} />
  <Card.Body>
    <Card.Title>Time Sheet</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="success">Add New Shift</Button>
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
