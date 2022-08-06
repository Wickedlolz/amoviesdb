import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { NotificationContext } from '../../contexts/Notification';
import { useParams, useNavigate } from 'react-router-dom';

import * as movieService from '../../services/data';

import CommentForm from '../Comment/CommentForm/CommentForm';
import CommentList from '../Comment/CommentList/CommentList';
import './MovieDetails.css';
import LoadingSpinner from '../Common/LoadingSpinner';
import MovieDetailsCard from './MovieDetailsCard';
import DeleteModal from '../DeleteModal/DeleteModal';

function MovieDetails() {
    const { movieId } = useParams();
    const { user } = useContext(AuthContext);
    const { addNotification } = useContext(NotificationContext);
    const [movie, setMovie] = useState({});
    const [isUpdated, setIsUpdated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        movieService
            .getById(movieId)
            .then((movieResponse) => {
                setMovie(movieResponse);
                setIsLoading(false);
            })
            .catch((error) => {
                addNotification(error.message, 'Error');
                navigate('/not-found', { replace: true });
            });
    }, [movieId, addNotification, isUpdated, navigate]);

    const onLikeClick = () => {
        movieService
            .like(movieId)
            .then((result) => {
                const newLikes = result.likes;
                setMovie((oldState) => ({ ...oldState, likes: newLikes }));
            })
            .catch((error) => addNotification(error.message, 'Error'));
    };

    const onDislikeClick = () => {
        movieService
            .dislike(movieId)
            .then((result) => {
                const newLikes = result.likes;
                setMovie((oldState) => ({ ...oldState, likes: newLikes }));
            })
            .catch((error) => addNotification(error.message, 'Error'));
    };

    const onDeleteClick = (event) => {
        setShowModal(true);
    };

    const onModalNoClickHandler = () => setShowModal(false);

    const onModalYesClickHandler = () => {
        setIsLoading(true);
        movieService
            .deleteById(movieId)
            .then((result) => {
                setIsLoading(false);
                addNotification(
                    'Successfully delete ' + result.title,
                    'Success'
                );
                navigate('/catalog', { replace: true });
            })
            .catch((error) => {
                addNotification(error.message, 'Error');
            })
            .finally(() => {
                setShowModal(false);
            });
    };

    const onSubmitCommentFormHandler = (content) => {
        setIsUpdated(false);
        movieService
            .comment(movieId, content)
            .then((result) => {
                setMovie((oldState) => ({
                    ...oldState,
                    comments: [...oldState.comments, result],
                }));
                setIsUpdated(true);
            })
            .catch((error) => {
                addNotification(error.message, 'Error');
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
            {user ? (
                <CommentForm
                    onSubmitCommentFormHandler={onSubmitCommentFormHandler}
                />
            ) : null}
            <CommentList comments={movie.comments} />
        </>
    );

    return (
        <div className="container py-3">
            {isLoading ? <LoadingSpinner /> : movieDetails}
        </div>
    );
}

export default MovieDetails;
