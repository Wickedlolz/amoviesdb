import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../contexts/Auth';
import { NotificationContext } from '../../contexts/Notification';

import * as movieService from '../../services/data';

import styles from './Edit.module.css';
import LoadingSpinner from '../Common/LoadingSpinner';
import { AlertMessage } from '../Common/AlertMessage';

function Edit() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { addNotification } = useContext(NotificationContext);
    const navigate = useNavigate();
    const { user } = useAuthContext();

    useEffect(() => {
        movieService
            .getById(movieId)
            .then((movie) => {
                if (movie.owner._id !== user?.id) {
                    return navigate('/');
                }

                setMovie(movie);
                setIsLoading(false);
            })
            .catch((error) => {
                addNotification(error.message, 'Error');
                navigate('/not-found', { replace: true });
            });
    }, [movieId, user, navigate, addNotification]);

    const onSubmitEditHandler = (data) => {
        movieService
            .editById(movieId, {
                title: data.title,
                imageUrl: data.imageUrl,
                youtubeUrl: data.youtubeUrl,
                description: data.description,
            })
            .then((result) => {
                addNotification(
                    `${result.title} updated successfully.`,
                    'Success'
                );
                navigate('/movie/' + result._id, { replace: true });
            })
            .catch((error) => {
                addNotification(error.message, 'Error');
                navigate('/not-found', { replace: true });
            });
    };

    const onCancelClick = (event) => {
        event.preventDefault();
        navigate('/movie/' + movieId);
    };

    return (
        <>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <section>
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <img
                                    src={movie.imageUrl}
                                    className={
                                        'img-fluid ' + styles['image-size']
                                    }
                                    alt="SignUp"
                                />
                            </div>
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <form
                                    onSubmit={handleSubmit(onSubmitEditHandler)}
                                >
                                    <div className="form-outline mb-4">
                                        {errors.title?.type === 'required' && (
                                            <AlertMessage
                                                msg={'Title is required'}
                                            />
                                        )}

                                        {errors.title?.type === 'maxLength' && (
                                            <AlertMessage
                                                msg={
                                                    'Title must have max 100 characters.'
                                                }
                                            />
                                        )}
                                        <input
                                            type="text"
                                            id="title"
                                            className="form-control form-control-lg"
                                            name="title"
                                            defaultValue={movie.title}
                                            {...register('title', {
                                                required: true,
                                                maxLength: 100,
                                            })}
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="title"
                                        >
                                            Title
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        {errors.imageUrl?.type ===
                                            'required' && (
                                            <AlertMessage
                                                msg={'Image URL is required.'}
                                            />
                                        )}

                                        {errors.imageUrl?.type ===
                                            'pattern' && (
                                            <AlertMessage
                                                msg={
                                                    'Image URL must start with http:// or https://.'
                                                }
                                            />
                                        )}
                                        <input
                                            type="text"
                                            id="imageUrl"
                                            className="form-control form-control-lg"
                                            name="imageUrl"
                                            defaultValue={movie.imageUrl}
                                            {...register('imageUrl', {
                                                required: true,
                                                pattern: /https?:\/\//g,
                                            })}
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="imageUrl"
                                        >
                                            Image URL
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        {errors.youtubeUrl?.type ===
                                            'required' && (
                                            <AlertMessage
                                                msg={'Image URL is required.'}
                                            />
                                        )}

                                        {errors.youtubeUrl?.type ===
                                            'pattern' && (
                                            <AlertMessage
                                                msg={
                                                    'Image URL must start with http/https'
                                                }
                                            />
                                        )}
                                        <input
                                            type="text"
                                            id="youtubeUrl"
                                            className="form-control form-control-lg"
                                            name="youtubeUrl"
                                            defaultValue={movie.youtubeUrl}
                                            {...register('youtubeUrl', {
                                                required: true,
                                                pattern: /https?:\/\//g,
                                            })}
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="youtubeUrl"
                                        >
                                            YouTube Link
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        {errors.description && (
                                            <AlertMessage
                                                msg={'Description is required.'}
                                            />
                                        )}
                                        <textarea
                                            name="description"
                                            id="description"
                                            cols="50"
                                            rows="5"
                                            defaultValue={movie.description}
                                            {...register('description', {
                                                required: true,
                                            })}
                                        ></textarea>
                                        <p
                                            className="form-label"
                                            htmlFor="description"
                                        >
                                            Description
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-secondary btn-lg btn-block m-2"
                                        onClick={onCancelClick}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-warning btn-lg btn-block"
                                    >
                                        Edit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default Edit;
