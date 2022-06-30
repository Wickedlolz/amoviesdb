import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <section>
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img
                            src="/images/draw2.svg"
                            className="img-fluid"
                            alt="SignIn"
                        />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form>
                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg"
                                    name="email"
                                />
                                <label className="form-label" htmlFor="email">
                                    Email address
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control form-control-lg"
                                />
                                <label
                                    className="form-label"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                            </div>

                            <div className="d-flex justify-content-around align-items-center mb-4">
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account?{' '}
                                    <Link
                                        to={'/signup'}
                                        className="link-danger"
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-lg btn-block"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
