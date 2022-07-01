import { Modal, Button } from 'react-bootstrap';

function DeleteModal({
    show,
    onModalNoClickHandler,
    onModalYesClickHandler,
    title,
}) {
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header onClick={onModalNoClickHandler} closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete Movie Title
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete {title}?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onModalNoClickHandler}>No</Button>
                <Button onClick={onModalYesClickHandler}>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;
