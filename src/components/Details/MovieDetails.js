import { useState } from 'react';
import CommentForm from '../Comment/CommentForm/CommentForm';
import CommentList from '../Comment/CommentList/CommentList';
import './MovieDetails.css';
import {
    HandThumbsUp,
    HandThumbsDown,
    PencilSquare,
    Trash3,
} from 'react-bootstrap-icons';

function MovieDetails() {
    const [movie, setMovie] = useState({
        id: 123,
        title: 'Avengers Endgame',
        imageUrl: 'https://source.unsplash.com/random',
        author: 'Viktor Dimitrov',
        description:
            'Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images',
        comments: [
            { id: 1, content: 'Aweseome design', user: 'Peter Peterson' },
            { id: 2, content: 'Amazing!', user: 'Viktor Dimitrov' },
            { id: 3, content: 'LoL :)', user: 'Jessica Alba' },
        ],
        likes: 20,
    });

    return (
        <div className="container py-3">
            <div className="title h1 text-center">{movie.title}</div>

            <div className="card">
                <div className="row ">
                    <div className="col-md-7 px-3">
                        <div className="card-block px-6">
                            <h4 className="card-title">Description</h4>
                            <p className="card-text">Author: {movie.author}</p>
                            <p className="card-text">{movie.description}</p>
                            <p className="card-text">Rating: {movie.likes}</p>
                            <button className="mt-auto btn btn-light">
                                <HandThumbsUp />
                            </button>{' '}
                            <button className="mt-auto btn btn-light">
                                <HandThumbsDown />
                            </button>{' '}
                            <button className="mt-auto btn btn-warning">
                                <PencilSquare />
                            </button>{' '}
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
            <CommentForm />
            <CommentList comments={movie.comments} />
        </div>
    );
}

export default MovieDetails;
