import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isAuth } from '../../hoc/isAuth';
import { NotificationContext } from '../../contexts/Notification';
import * as movieService from '../../services/data';

import { AlerMessage } from '../Common/AlertMessage';

function Create() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { addNotification } = useContext(NotificationContext);
    const navigate = useNavigate();

    const onSubmitCreateHandler = (data) => {
        movieService
            .create({
                title: data.title,
                imageUrl: data.imageUrl,
                youtubeUrl: data.youtubeUrl,
                description: data.description,
            })
            .then((result) => {
                addNotification(
                    'Successfully created ' + result.title,
                    'Success'
                );
                navigate('/movie/' + result._id);
            })
            .catch((error) => addNotification(error.message, 'Error'));
    };

    return (
        <section>
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img
                            src="/images/summer-movies.png"
                            className="img-fluid"
                            alt="SignUp"
                        />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={handleSubmit(onSubmitCreateHandler)}>
                            <div className="form-outline mb-4">
                                {errors.title?.type === 'required' && (
                                    <AlerMessage msg={'Title is required'} />
                                )}

                                {errors.title?.type === 'maxLength' && (
                                    <AlerMessage
                                        msg={
                                            'Title must have max 20 characters.'
                                        }
                                    />
                                )}

                                <input
                                    type="text"
                                    id="title"
                                    className="form-control form-control-lg"
                                    name="title"
                                    {...register('title', {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                <label className="form-label" htmlFor="title">
                                    Title
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                {errors.imageUrl?.type === 'required' && (
                                    <AlerMessage
                                        msg={'Image URL is required.'}
                                    />
                                )}

                                {errors.imageUrl?.type === 'pattern' && (
                                    <AlerMessage
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
                                {errors.youtubeUrl?.type === 'required' && (
                                    <AlerMessage
                                        msg={'Image URL is required.'}
                                    />
                                )}

                                {errors.youtubeUrl?.type === 'pattern' && (
                                    <AlerMessage
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
                                    {...register('youtubeUrl', {
                                        required: true,
                                        pattern: /https?:\/\//g,
                                    })}
                                />
                                <label
                                    className="form-label"
                                    htmlFor="youtubeUrl"
                                >
                                    YouTube Link URL
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                {errors.description && (
                                    <AlerMessage
                                        msg={'Description is required.'}
                                    />
                                )}

                                <input
                                    type="text"
                                    id="description"
                                    className="form-control form-control-lg"
                                    name="description"
                                    {...register('description', {
                                        required: true,
                                    })}
                                />
                                <label
                                    className="form-label"
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                            </div>

                            <Link
                                to={'/'}
                                className="btn btn-secondary btn-lg btn-block m-2"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                className="btn btn-success btn-lg btn-block"
                            >
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default isAuth(Create);
