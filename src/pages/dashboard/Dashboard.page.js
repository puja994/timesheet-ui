import React from 'react'
import {Container, Row,Col,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

export const Dashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                <Col className="text-center mt-5 mb-2">
          <Link to="/add-shift">
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add New Shift
            </Button>
          </Link>
        </Col>
                </Row>

                <Row>
        <Col className="mt-2">Recently Added shifts</Col>
      </Row>
      <hr />

            </Container>
            
        </div>
    )
}
