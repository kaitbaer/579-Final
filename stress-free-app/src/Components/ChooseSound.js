import { Button, Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Navigation from "./Navigation";
import { useState } from "react";

const ChooseSound = () => {
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [sound, setSound] = useState('')

    return(
        <>
        <Navigation />
        <div className="main-content">
            <Container>
                <h1>Now, choose a sound for your relaxation period</h1>
                <Row xs={5} className='p-5'>
                    <Col xs={4}>
                        <Button variant='outline-dark' size='lg' active={active1} onClick={(e) => setActive1('true') && setSound('white noise')}>
                            White Noise
                        </Button>
                    </Col>
                    <Col xs={4}>
                    <Button variant='outline-dark' size='lg' active={active2} onClick={() => setActive2('true') && setSound('rain')}>
                            Rain
                    </Button>
                    </Col>
                    <Col xs={4}>
                    <Button variant='outline-dark' size='lg' active={active3} onClick={() => setActive3('true') && setSound('piano')}>
                            Piano
                    </Button>
                    </Col>
                </Row>
                <Row>
                    <Link to='/chooseduration'> 
                    <Button variant="outline-dark" className="m-5">
                        Next
                    </Button>
                    </Link>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default ChooseSound