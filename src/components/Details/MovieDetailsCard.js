import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
import {
    HandThumbsUpFill,
    HandThumbsDownFill,
    PencilSquare,
    Trash3,
    HeartFill,
} from 'react-bootstrap-icons';

function MovieDetailsCard({
    movie,
    onDeleteClick,
    onLikeClick,
    onDislikeClick,
}) {
    const { user } = useContext(AuthContext);

    return (
        <div className="row ">
            <div className="col-md-7 px-4">
                <div className="card-block px-6">
                    <h4 className="card-title">{movie.title}</h4>
                    <p className="card-text text-muted">
                        Author: {movie.owner.firstName} {movie.owner.lastName}
                    </p>
                    <p className="card-text">{movie.description}</p>
                    <div className="p-3 card-text">
                        <ReactPlayer
                            url={movie.youtubeUrl}
                            controls={true}
                            config={{
                                youtube: {
                                    playerVars: {
                                        origin: 'http://localhost:3000/',
                                    },
                                },
                            }}
                        />
                    </div>
                    {user && user.id != movie.owner._id ? (
                        <div className="p-3 text-center">
                            {movie.likes.includes(user.id) ? (
                                <button
                                    onClick={onDislikeClick}
                                    className="mt-auto btn btn-light"
                                >
                                    <HandThumbsDownFill /> {movie.likes.length}
                                </button>
                            ) : (
                                <button
                                    onClick={onLikeClick}
                                    className="mt-auto btn btn-light"
                                >
                                    <HandThumbsUpFill /> {movie.likes.length}
                                </button>
                            )}
                        </div>
                    ) : null}
                    {movie.owner._id == user?.id ? (
                        <div className="p-3 text-center">
                            <Link
                                to={'/edit/' + movie._id}
                                className="mt-auto btn btn-warning"
                            >
                                <PencilSquare />
                            </Link>{' '}
                            <button
                                onClick={onDeleteClick}
                                className="mt-auto btn btn-danger"
                            >
                                <Trash3 />
                            </button>
                        </div>
                    ) : null}

                    {!user ? (
                        <div className="p-3 text-center">
                            <button
                                className="mt-auto btn btn-light"
                                disabled={true}
                            >
                                <HeartFill /> {movie.likes.length}
                            </button>
                        </div>
                    ) : null}
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
