import { useState, useContext } from 'react';
import AuthContext from '../../contexts/Auth';
import { Link, useNavigate } from 'react-router-dom';
import * as userService from '../../services/user';

import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';
import styles from './SignUp.module.css';

function SignUp() {
    const { addUser } = useContext(AuthContext);
    const [isVisible, setIsVisivle] = useState(false);
    const navigate = useNavigate();

    const onTermsClickHandler = () => setIsVisivle(true);
    const onTermsClose = () => setIsVisivle(false);

    const onSubmitSignUp = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.entries()].reduce(
            (a, [k, v]) => Object.assign(a, { [k]: v.trim() }),
            {}
        );

        if (data.acceptTerms) {
            userService
                .signUp(data)
                .then((userData) => {
                    addUser(userData);
                    navigate('/');
                })
                .catch((error) => console.log(error));
        } else {
            console.log('Tearms are not accepted.');
        }
    };

    return (
        <section>
            <TermsAndConditions show={isVisible} onTermsClose={onTermsClose} />
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img
                            src="/images/draw2.svg"
                            className="img-fluid"
                            alt="SignUp"
                        />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={onSubmitSignUp}>
                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="firstName"
                                    className="form-control form-control-lg"
                                    name="firstName"
                                />
                                <label
                                    className="form-label"
                                    htmlFor="firstName"
                                >
                                    First Name
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-control form-control-lg"
                                    name="lastName"
                                />
                                <label
                                    className="form-label"
                                    htmlFor="lastName"
                                >
                                    Last Name
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="username"
                                    className="form-control form-control-lg"
                                    name="username"
                                />
                                <label
                                    className="form-label"
                                    htmlFor="username"
                                >
                                    Username
                                </label>
                            </div>

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

                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="rePassword"
                                    name="rePassword"
                                    className="form-control form-control-lg"
                                />
                                <label
                                    className="form-label"
                                    htmlFor="rePassword"
                                >
                                    Re-Password
                                </label>
                            </div>

                            <div className="form-check d-flex justify-content-center mb-5">
                                <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    name="acceptTerms"
                                    id="acceptTerms"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="acceptTerms"
                                >
                                    I agree all statements in{' '}
                                    <span
                                        onClick={onTermsClickHandler}
                                        className={'text-body ' + styles.terms}
                                    >
                                        <u>Terms of service</u>
                                    </span>
                                </label>
                            </div>

                            <div className="d-flex justify-content-around align-items-center mb-4">
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Have already an account?{' '}
                                    <Link
                                        to={'/signin'}
                                        className="link-danger"
                                    >
                                        Sign In
                                    </Link>
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-lg btn-block"
                            >
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;
