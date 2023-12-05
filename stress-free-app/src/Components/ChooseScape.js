import React from "react";
import Navigation from "./Navigation";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import mountain from "../Images/Mountains.jpg";
import forrest from "../Images/Forrest.jpg";
import river from "../Images/River.jpg";
import { Link } from "react-router-dom";

const ChooseScape = () => {
    return (
        <>
        <Navigation />
        <div className="main-content">
            <Container>
                <h1 className="p-5">First, Choose Your Naturescape</h1>
                <Row xs={3} className="g-6">
                        <Col>
                        <Card className="">
                            <Card.Img variant="top" src={mountain} />
                            <Card.Body>
                            <Card.Title>Mountains</Card.Title>
                            <Button onClick={() => {console.log("You chose Mountains")}} variant="primary">Select</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card className="">
                            <Card.Img variant="top" src={forrest} />
                            <Card.Body>
                            <Card.Title>Forrest</Card.Title>
                            <Button onClick={() => {console.log("You chose Forrest")}}variant="primary">Select</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card className="">
                            <Card.Img variant="top" src={river} />
                            <Card.Body>
                            <Card.Title>River</Card.Title>
                            <Button onClick={() => {console.log("You chose River")}} variant="primary">Select</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                </Row>
                <Row xs={4}>
                    <Link to='/choosesound'>
                    <Button className="" variant="primary">Select</Button>
                    </Link>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default ChooseScape;