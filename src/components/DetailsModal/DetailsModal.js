import LoadingSpinner from '../Common/LoadingSpinner';
import { Modal, Button } from 'react-bootstrap';
import { StarHalf } from 'react-bootstrap-icons';
import ReactPlayer from 'react-player/youtube';

function DetailsModal({ show, onModalCloseClick, movie, isLoading, video }) {
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
                        <ReactPlayer
                            muted={true}
                            playing
                            width="100%"
                            url={`https://www.youtube.com/watch?v=${video?.key}`}
                            controls={true}
                        />
                        <p>{movie.overview}</p>
                        <p>
                            Genres:{' '}
                            {movie.genres.map((ganre) => ganre.name).join(', ')}
                        </p>
                        <p>
                            <span className="text-muted">Release date:</span>{' '}
                            {movie.release_date}
                        </p>
                        <p>
                            <span className="text-muted">
                                Original Language:
                            </span>{' '}
                            {movie.original_language}
                        </p>
                        <p>
                            <span className="text-muted">Total Votes:</span>{' '}
                            {movie.vote_count}
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
