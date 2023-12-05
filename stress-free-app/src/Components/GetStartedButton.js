import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GetStartedButton = () => {    
    return(
        <Link to='/choosescape'>
            <Button variant="outline-dark">
                Set up Space
            </Button>
        </Link>
    )
}

export default GetStartedButton;