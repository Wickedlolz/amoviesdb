import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { Link, useNavigate } from 'react-router-dom';
import * as userService from '../../services/user';
import { setUserData } from '../../utils/utils';
import { AlerMessage } from '../Common/AlertMessage';
import { isValidEmail } from '../../utils/authValidation';

function SignIn() {
    const [errors, setErrors] = useState({
        email: null,
        password: null,
        authError: null,
        empty: null,
    });
    const navigate = useNavigate();
    const { addUser } = useContext(AuthContext);

    const onSubmitSignIn = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email == '' || password == '') {
            setErrors((oldState) => ({
                ...oldState,
                empty: 'All fields are required.',
            }));
            return;
        }

        userService
            .signIn(email, password)
            .then((userData) => {
                setErrors((oldState) => ({ ...oldState, authError: null }));
                addUser(userData);
                setUserData(userData);
                navigate('/');
            })
            .catch((error) => {
                setErrors((oldState) => ({
                    ...oldState,
                    authError: error.message,
                }));
            });
    };

    const onValidateEmail = (event) => {
        const currentEmail = event.target.value;

        setErrors((oldState) => ({
            ...oldState,
            email: isValidEmail(currentEmail),
        }));
    };

    const onValidatePassword = (event) => {
        const currentPassword = event.target.value;

        if (currentPassword.length < 3) {
            setErrors((oldState) => ({
                ...oldState,
                password: 'Password must be at least 3 characters long.',
            }));
        } else {
            setErrors((oldState) => ({
                ...oldState,
                password: null,
            }));
        }
    };

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
                        <form onSubmit={onSubmitSignIn}>
                            {errors.authError ? (
                                <AlerMessage msg={errors.authError} />
                            ) : null}
                            {errors.empty ? (
                                <AlerMessage msg={errors.empty} />
                            ) : null}
                            <div className="form-outline mb-4">
                                {errors.email ? (
                                    <AlerMessage msg={errors.email} />
                                ) : null}
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg"
                                    name="email"
                                    onBlur={onValidateEmail}
                                />
                                <label className="form-label" htmlFor="email">
                                    Email address
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                {errors.password ? (
                                    <AlerMessage msg={errors.password} />
                                ) : null}
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control form-control-lg"
                                    onBlur={onValidatePassword}
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
