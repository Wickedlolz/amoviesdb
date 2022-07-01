import {
    HandThumbsUp,
    HandThumbsDown,
    PencilSquare,
    Trash3,
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function MovieDetailsCard({ movie, onDeleteClick, onLikeClick }) {
    return (
        <div className="row ">
            <div className="col-md-7 px-3">
                <div className="card-block px-6">
                    <h4 className="card-title">Description</h4>
                    <p className="card-text">Author: </p>
                    <p className="card-text">{movie.description}</p>
                    <p className="card-text">Rating: {movie.likes.length}</p>
                    <button
                        onClick={onLikeClick}
                        className="mt-auto btn btn-light"
                    >
                        <HandThumbsUp />
                    </button>{' '}
                    <button className="mt-auto btn btn-light">
                        <HandThumbsDown />
                    </button>{' '}
                    <Link
                        to={'/edit/' + movie._id}
                        className="mt-auto btn btn-warning"
                    >
                        <PencilSquare />
                    </Link>
                    <button
                        onClick={onDeleteClick}
                        className="mt-auto btn btn-danger"
                    >
                        <Trash3 />
                    </button>
                </div>
            </div>
            <div className="col-md-5">
                <img
                    className="d-block img-thumbnail movie-image-card"
                    src={movie.imageUrl}
                    alt="movie"
                />
            </div>
        </div>
    );
}

export default MovieDetailsCard;
