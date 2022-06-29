import CommentForm from '../Comment/CommentForm/CommentForm';
import CommentList from '../Comment/CommentList/CommentList';
import './MovieDetails.css';
import {
    HandThumbsUp,
    HandThumbsDown,
    PencilSquare,
    Trash3,
} from 'react-bootstrap-icons';

const mockCommentsData = [
    { id: 1, content: 'Aweseome design', user: 'Peter Peterson' },
    { id: 2, content: 'Amazing!', user: 'Viktor Dimitrov' },
    { id: 3, content: 'LoL :)', user: 'Jessica Alba' },
];

function MovieDetails() {
    return (
        <div className="container py-3">
            <div className="title h1 text-center">Avengers Endgame</div>

            <div className="card">
                <div className="row ">
                    <div className="col-md-7 px-3">
                        <div className="card-block px-6">
                            <h4 className="card-title">Description</h4>
                            <p className="card-text">Author: Viktor Dimitrov</p>
                            <p className="card-text">
                                Made for usage, commonly searched for. Fork,
                                like and use it. Just move the carousel div
                                above the col containing the text for left
                                alignment of images
                            </p>
                            <p className="card-text">Rating: 0</p>
                            <a href="#/" className="mt-auto btn btn-light">
                                <HandThumbsUp />
                            </a>{' '}
                            <a href="#/" className="mt-auto btn btn-light">
                                <HandThumbsDown />
                            </a>{' '}
                            <a href="#/" className="mt-auto btn btn-warning">
                                <PencilSquare />
                            </a>{' '}
                            <a href="#/" className="mt-auto btn btn-danger">
                                <Trash3 />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img
                            className="d-block img-thumbnail movie-image-card"
                            src="https://source.unsplash.com/random"
                            alt="movie"
                        />
                    </div>
                </div>
            </div>
            <CommentForm />
            <CommentList comments={mockCommentsData} />
        </div>
    );
}

export default MovieDetails;
