import * as movieService from '../../services/data';
import { Link } from 'react-router-dom';

function Create() {
    const onSubmitCreateHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const youtubeLink = formData.get('youtubeLink').trim();
        const description = formData.get('description').trim();

        if (
            title == '' ||
            imageUrl == '' ||
            description == '' ||
            youtubeLink == ''
        ) {
            return;
        }

        movieService
            .create({ title, imageUrl, youtubeLink, description })
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    };

    return (
        <section>
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img
                            src="https://source.unsplash.com/random"
                            className="img-fluid"
                            alt="SignUp"
                        />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={onSubmitCreateHandler}>
                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="title"
                                    className="form-control form-control-lg"
                                    name="title"
                                />
                                <label className="form-label" htmlFor="title">
                                    Title
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="imageUrl"
                                    className="form-control form-control-lg"
                                    name="imageUrl"
                                />
                                <label
                                    className="form-label"
                                    htmlFor="imageUrl"
                                >
                                    Image URL
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="youtubeLink"
                                    className="form-control form-control-lg"
                                    name="youtubeLink"
                                />
                                <label
                                    className="form-label"
                                    htmlFor="youtubeLink"
                                >
                                    YouTube Link URL
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="description"
                                    className="form-control form-control-lg"
                                    name="description"
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

export default Create;
