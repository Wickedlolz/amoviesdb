import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
import {
    HandThumbsUpFill,
    HandThumbsDownFill,
    PencilSquare,
    Trash3,
} from 'react-bootstrap-icons';

function MovieDetailsCard({
    movie,
    onDeleteClick,
    onLikeClick,
    onDislikeClick,
}) {
    return (
        <div className="row ">
            <div className="col-md-7 px-3">
                <div className="card-block px-6">
                    <h4 className="card-title">{movie.title}</h4>
                    <p className="card-text">
                        Author: {movie.owner.firstName} {movie.owner.lastName}
                    </p>
                    <p className="card-text">{movie.description}</p>
                    <p className="card-text">Likes: {movie.likes.length}</p>
                    <div className="p-3">
                        <ReactPlayer url={movie.youtubeUrl} controls={true} />
                    </div>
                    <button
                        onClick={onLikeClick}
                        className="mt-auto btn btn-light"
                    >
                        <HandThumbsUpFill />
                    </button>{' '}
                    <button
                        onClick={onDislikeClick}
                        className="mt-auto btn btn-light"
                    >
                        <HandThumbsDownFill />
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
