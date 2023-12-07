import { Container, Row, Col, Button} from "react-bootstrap";
import Navigation from "./Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

const ChooseDuration = () => {
    const [timerActive1, setTimerActive1] = useState(false)
    const [timerActive2, setTimerActive2] = useState(false)
    const [timerActive3, setTimerActive3] = useState(false)
    const [countdown, setCountdown] = useState(0)
    

    return (
        <>
        <Navigation />
        <div className='main-content'>
        <Container>
                <h1>Finally, Choose your Stress Time-out Duration</h1>
                <Row xs={5} className='p-5'>
                    <Col xs={4}>
                        <Button variant='outline-dark' size='lg' active={timerActive1} onClick={(e) => {setTimerActive1('true'); setCountdown(60000)}}>
                            2 minutes
                        </Button>
                    </Col>
                    <Col xs={4}>
                    <Button variant='outline-dark' size='lg' active={timerActive2} onClick={() => setTimerActive2('true') && setCountdown(300000)}>
                            5 minutes
                    </Button>
                    </Col>
                    <Col xs={4}>
                    <Button variant='outline-dark' size='lg' active={timerActive3} onClick={() => setTimerActive3('true') && setCountdown(600000)}>
                            10 minutes
                    </Button>
                    </Col>
                </Row>
                <Row>
                    <Link to='/stressspace'> 
                    <Button variant="outline-dark" className="m-5">
                        Start
                    </Button>
                    </Link>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default ChooseDuration