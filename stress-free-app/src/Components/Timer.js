import { Container, Row, Col, Button} from "react-bootstrap";
import Navigation from "./Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

const Timer = () => {
    const [timerActive1, setTimerActive1] = useState(false)
    const [timerActive2, setTimerActive2] = useState(false)
    const [timerActive3, setTimerActive3] = useState(false)
    const [countdown, setCountdown] = useState('')
    

    return (
        <>
        <Navigation />
        <div className='main-content'>
        <Container>
                <h1>Finally, Choose your Stress Time-out Duration</h1>
                <Row xs={5} className='p-5'>
                    <Col xs={4}>
                        <Button variant='light' size='lg' active={timerActive1} onClick={(e) => setTimerActive1('true') && setCountdown('2')}>
                            2 minutes
                        </Button>
                    </Col>
                    <Col xs={4}>
                    <Button variant='light' size='lg' active={timerActive2} onClick={() => setTimerActive2('true') && setCountdown('5')}>
                            5 minutes
                    </Button>
                    </Col>
                    <Col xs={4}>
                    <Button variant='light' size='lg' active={timerActive3} onClick={() => setTimerActive3('true') && setCountdown('10')}>
                            10 minutes
                    </Button>
                    </Col>
                </Row>
                <Row>
                    <Link to='/stressspace'> 
                    <Button>
                        Start
                    </Button>
                    </Link>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Timer