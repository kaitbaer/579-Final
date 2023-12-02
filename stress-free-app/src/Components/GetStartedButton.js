import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GetStartedButton = () => {    
    return(
        <Link to='/choosescape'>
            <Button>
                Get Started
            </Button>
        </Link>
    )
}

export default GetStartedButton;