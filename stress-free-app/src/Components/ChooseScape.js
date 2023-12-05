import React from "react";
import Navigation from "./Navigation";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import mountain from "../Images/Mountains.jpg";
import forrest from "../Images/Forrest.jpg";
import river from "../Images/River.jpg";
import { Link } from "react-router-dom";

const ChooseScape = () => {
    const [durationActive1, setDurationActive1] = useState(false)
    const [durationActive2, setDurationActive2] = useState(false)
    const [durationActive3, setDurationActive3] = useState(false)


    return (
        <>
        <Navigation />
        <div className="main-content">
            <Container>
                <h1 className="p-5">First, Choose Your Naturescape</h1>
                <Row xs={3} className="g-6">
                        <Col>
                        <Card className="bg-light">
                            <Card.Img variant="top" src={mountain} />
                            <Card.Body>
                            <Card.Title>Mountains</Card.Title>
                            <Button active={durationActive1} onClick={(e) => setDurationActive1('true')} variant="outline-dark">Select</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card className="bg-light">
                            <Card.Img variant="top" src={forrest} />
                            <Card.Body>
                            <Card.Title>Forrest</Card.Title>
                            <Button active={durationActive2} onClick={(e) => setDurationActive2('true')} variant="outline-dark">Select</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card className="bg-light">
                            <Card.Img variant="top" src={river} />
                            <Card.Body>
                            <Card.Title>River</Card.Title>
                            <Button active={durationActive3} onClick={(e) => setDurationActive3('true')} variant="outline-dark">Select</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                </Row>
                    <Link to='/choosesound'>
                    <Button className="m-5"variant="outline-dark">Select</Button>
                    </Link>
            </Container>
        </div>
        </>
    )
}

export default ChooseScape;