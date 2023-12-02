import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GetStartedButton = () => {    
    return(
        <Link to='/next'>
            <Button>
                Get Started
            </Button>
        </Link>
    )
}

export default GetStartedButton;