import { Button } from "react-bootstrap";
import Countdown from 'react-countdown';
import { useRef} from "react";

const Timer = (props) => {
    const timerStarter = useRef(null)
    
    const handleClick = () => {
        timerStarter.current.start()
    }

    return (
        <div>
        <Countdown 
        date={Date.now() + props.contdown}
        autoStart={false}
        ref={timerStarter}
        />
        <Button variant="outline-dark" onClick={handleClick}>
            Start
        </Button>
        </div>
    )


}
export default Timer