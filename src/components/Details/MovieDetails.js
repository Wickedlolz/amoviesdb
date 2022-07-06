import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { NotificationContext } from '../../contexts/Notification';
import { useParams, useNavigate } from 'react-router-dom';

import * as movieService from '../../services/data';

import CommentForm from '../Comment/CommentForm/CommentForm';
import CommentList from '../Comment/CommentList/CommentList';
import './MovieDetails.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieDetailsCard from './MovieDetailsCard';
import DeleteModal from '../DeleteModal/DeleteModal';

function MovieDetails() {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const { addNotification } = useContext(NotificationContext);
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getById(id).then((movie) => {
            setMovie(movie);
            setIsLoading(false);
        });
    }, [id, movie]);

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
                addNotification(
                    'Successfully delete ' + result.title,
                    'Success'
                );
                navigate('/');
            })
            .catch((error) => {
                addNotification(error.message, 'Error');
            })
            .finally(() => {
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
            <div className="title h1 text-center">Movie Details</div>

            {isLoading ? <LoadingSpinner /> : movieDetails}
        </div>
    );
}

export default MovieDetails;
