import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as movieService from '../../services/data';

import styles from './Edit.module.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function Edit() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        movieService.getById(id).then((movie) => {
            setMovie(movie);
            setIsLoading(false);
        });
    }, [id]);

    const onSubmitEditHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const description = formData.get('description').trim();

        if (title == '' || imageUrl == '' || description == '') {
            return;
        }

        movieService
            .editById(id, { title, imageUrl, description })
            .then((result) => console.log(result))
            .catch((error) => console.log(error.message));
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
                                <form onSubmit={onSubmitEditHandler}>
                                    <div className="form-outline mb-4">
                                        <input
                                            type="text"
                                            id="title"
                                            className="form-control form-control-lg"
                                            name="title"
                                            defaultValue={movie.title}
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="title"
                                        >
                                            Title
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="text"
                                            id="imageUrl"
                                            className="form-control form-control-lg"
                                            name="imageUrl"
                                            defaultValue={movie.imageUrl}
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="imageUrl"
                                        >
                                            Image URL
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <textarea
                                            name="description"
                                            id="description"
                                            cols="50"
                                            rows="5"
                                            defaultValue={movie.description}
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
