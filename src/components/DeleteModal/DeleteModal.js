import { Modal, Button } from 'react-bootstrap';

function DeleteModal() {
    return (
        <Modal
            show={true}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete Movie Title
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete Movie Title?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button>No</Button>
                <Button>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;
