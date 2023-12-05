import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GetStartedButton = () => {    
    return(
        <Link to='/choosescape'>
            <Button>
                Set up Space
            </Button>
        </Link>
    )
}

export default GetStartedButton;