import LoadingSpinner from '../Common/LoadingSpinner';
import { Modal, Button } from 'react-bootstrap';
import { StarHalf } from 'react-bootstrap-icons';

function DetailsModal({ show, onModalCloseClick, movie, isLoading }) {
    return (
        <Modal
            show={show}
            size="lg"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <Modal.Header onClick={onModalCloseClick} closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {movie.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{movie.overview}</p>
                        <p>
                            Genres:{' '}
                            {movie.genres.map((ganre) => ganre.name).join(', ')}
                        </p>
                        <p className="text-muted">
                            Release date: {movie.release_date}
                        </p>
                        <p>
                            <StarHalf /> {movie.vote_average}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={onModalCloseClick}>Close</Button>
                    </Modal.Footer>
                </>
            )}
        </Modal>
    );
}

export default DetailsModal;
