import { Modal } from "bootstrap";
import Button from "bootstrap";

const CenterContainer = () => {
    return(
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
}

export default CenterContainer