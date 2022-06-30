import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentForm from '../Comment/CommentForm/CommentForm';
import CommentList from '../Comment/CommentList/CommentList';
import './MovieDetails.css';
import {
    HandThumbsUp,
    HandThumbsDown,
    PencilSquare,
    Trash3,
} from 'react-bootstrap-icons';
import LoadingSpinner from '../Loading/Loading';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState({ comments: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3030/api/catalog/' + id)
            .then((res) => res.json())
            .then((movie) => {
                setIsLoading(false);
                setMovie(movie);
            });
    }, [id]);

    console.log(movie.comments);

    return (
        <div className="container py-3">
            <div className="title h1 text-center">{movie.title}</div>

            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div className="card">
                    <div className="row ">
                        <div className="col-md-7 px-3">
                            <div className="card-block px-6">
                                <h4 className="card-title">Description</h4>
                                <p className="card-text">Author: </p>
                                <p className="card-text">{movie.description}</p>
                                <p className="card-text">
                                    Rating: {movie.likes.length}
                                </p>
                                <button className="mt-auto btn btn-light">
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
                                <button className="mt-auto btn btn-danger">
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
                </div>
            )}
            <CommentForm />
            <CommentList comments={movie.comments} />
        </div>
    );
}

export default MovieDetails;
