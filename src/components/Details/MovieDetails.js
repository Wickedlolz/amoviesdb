import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as movieService from '../../services/data';

import CommentForm from '../Comment/CommentForm/CommentForm';
import CommentList from '../Comment/CommentList/CommentList';
import './MovieDetails.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieDetailsCard from './MovieDetailsCard';
import DeleteModal from '../DeleteModal/DeleteModal';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        movieService.getById(id).then((movie) => {
            setMovie(movie);
            setIsLoading(false);
        });
    }, [id]);

    const onLikeClick = () => {
        movieService
            .like(id)
            .then((result) => {
                const newLikes = result.likes;
                setMovie((oldState) => ({ ...oldState, likes: newLikes }));
            })
            .catch((error) => console.log(error));
    };

    const onDislikeClick = () => {
        movieService
            .dislike(id)
            .then((result) => {
                const newLikes = result.likes;
                setMovie((oldState) => ({ ...oldState, likes: newLikes }));
            })
            .catch((error) => console.log(error.message));
    };

    const onDeleteClick = (event) => {
        setShowModal(true);
    };

    const onModalNoClickHandler = () => setShowModal(false);

    const onModalYesClickHandler = () => {
        movieService
            .deleteById(id)
            .then((result) => {
                console.log(result);
                setShowModal(false);
            })
            .catch((error) => {
                console.log(error);
                setShowModal(false);
            });
    };

    const onSubmitCommentFormHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const content = formData.get('content').trim();

        if (content == '') {
            return;
        }

        movieService
            .comment(id, content)
            .then((result) => {
                setMovie((oldState) => ({
                    ...oldState,
                    comments: [...oldState.comments, result],
                }));
                event.target.reset();
            })
            .catch((error) => {
                console.log(error);
                event.target.reset();
            });
    };

    const movieDetails = (
        <>
            <DeleteModal
                show={showModal}
                onModalNoClickHandler={onModalNoClickHandler}
                onModalYesClickHandler={onModalYesClickHandler}
                backdrop="static"
                title={movie.title}
            />
            <div className="card">
                <MovieDetailsCard
                    movie={movie}
                    onDeleteClick={onDeleteClick}
                    onLikeClick={onLikeClick}
                    onDislikeClick={onDislikeClick}
                />
            </div>
            <CommentForm
                onSubmitCommentFormHandler={onSubmitCommentFormHandler}
            />
            <CommentList comments={movie.comments} />
        </>
    );

    return (
        <div className="container py-3">
            <div className="title h1 text-center">Movie Details</div>

            {isLoading ? <LoadingSpinner /> : movieDetails}
        </div>
    );
}

export default MovieDetails;
