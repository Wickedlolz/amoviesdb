import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { NotificationContext } from '../../contexts/Notification';
import { Link, useNavigate } from 'react-router-dom';
import * as userService from '../../services/user';

import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';
import styles from './SignUp.module.css';
import { AlerMessage } from '../Common/AlertMessage';
import { isValidEmail, isValidUsername } from '../../utils/authValidation';
import { setUserData } from '../../utils/utils';

const initialErrorsState = {
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    password: null,
    rePassword: null,
    empty: null,
    acceptedTerms: null,
};

function SignUp() {
    const { addUser } = useContext(AuthContext);
    const [isVisible, setIsVisivle] = useState(false);
    const [errors, setErrors] = useState(initialErrorsState);
    const { addNotification } = useContext(NotificationContext);
    const navigate = useNavigate();

    const onTermsClickHandler = () => setIsVisivle(true);
    const onTermsClose = () => setIsVisivle(false);

    const onSubmitSignUp = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const firstName = formData.get('firstName').trim();
        const lastName = formData.get('lastName').trim();
        const username = formData.get('username').trim();
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePassword = formData.get('rePassword').trim();
        const acceptTerms = formData.get('acceptTerms');

        if (acceptTerms) {
            if (
                firstName == '' ||
                lastName == '' ||
                username == '' ||
                email == '' ||
                password == '' ||
                rePassword == ''
            ) {
                setErrors((oldState) => ({
                    ...oldState,
                    empty: 'All fields are not filled.',
                }));
            } else {
                userService
                    .signUp({ firstName, lastName, username, email, password })
                    .then((userData) => {
                        addUser(userData);
                        setUserData(userData);
                        addNotification('Successfully registerd.', 'Success');
                        navigate('/');
                    })
                    .catch((error) => {
                        addNotification(error.message, 'Alert');
                    });
            }
        } else {
            setErrors((oldState) => ({
                ...oldState,
                acceptedTerms: 'Terms and Conditions is not accpeted.',
            }));
        }
    };

    const onFirstNameValidate = (event) => {
        const currentFirstName = event.target.value;

        if (currentFirstName < 3) {
            setErrors((oldState) => ({
                ...oldState,
                firstName: 'First Name must be at least 3 characters long.',
            }));
        } else {
            setErrors((oldState) => ({ ...oldState, firstName: null }));
        }
    };

    const onLastNameValidate = (event) => {
        const currentLastName = event.target.value;

        if (currentLastName < 3) {
            setErrors((oldState) => ({
                ...oldState,
                lastName: 'Last Name must be at least 3 characters long.',
            }));
        } else {
            setErrors((oldState) => ({ ...oldState, lastName: null }));
        }
    };

    const onUsernameValidate = (event) => {
        const currentUserName = event.target.value;
        setErrors((oldState) => ({
            ...oldState,
            username: isValidUsername(currentUserName),
        }));
    };

    const onEmailValidate = (event) => {
        const currentEmail = event.target.value;

        setErrors((oldState) => ({
            ...oldState,
            email: isValidEmail(currentEmail),
        }));
    };

    const onPasswordValidate = (event) => {
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

    const onRePasswordValidate = (event) => {
        const currentRePassword = event.target.value;
        const pass = event.target.parentElement.parentElement[4].value;

        if (currentRePassword != pass) {
            setErrors((oldState) => ({
                ...oldState,
                password: 'Passwords not match.',
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
                            {errors.acceptedTerms ? (
                                <AlerMessage msg={errors.acceptedTerms} />
                            ) : null}
                            {errors.authError ? (
                                <AlerMessage msg={errors.authError} />
                            ) : null}
                            {errors.empty ? (
                                <AlerMessage msg={errors.empty} />
                            ) : null}
                            <div className="form-outline mb-4">
                                {errors.firstName ? (
                                    <AlerMessage msg={errors.firstName} />
                                ) : null}
                                <input
                                    type="text"
                                    id="firstName"
                                    className="form-control form-control-lg"
                                    name="firstName"
                                    onBlur={onFirstNameValidate}
                                />
                                <label
                                    className="form-label"
                                    htmlFor="firstName"
                                >
                                    First Name
                                </label>
                            </div>
                            <div className="form-outline mb-4">
                                {errors.lastName ? (
                                    <AlerMessage msg={errors.lastName} />
                                ) : null}
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-control form-control-lg"
                                    name="lastName"
                                    onBlur={onLastNameValidate}
                                />
                                <label
                                    className="form-label"
                                    htmlFor="lastName"
                                >
                                    Last Name
                                </label>
                            </div>
                            <div className="form-outline mb-4">
                                {errors.username ? (
                                    <AlerMessage msg={errors.username} />
                                ) : null}
                                <input
                                    type="text"
                                    id="username"
                                    className="form-control form-control-lg"
                                    name="username"
                                    onBlur={onUsernameValidate}
                                />
                                <label
                                    className="form-label"
                                    htmlFor="username"
                                >
                                    Username
                                </label>
                            </div>
                            <div className="form-outline mb-4">
                                {errors.email ? (
                                    <AlerMessage msg={errors.email} />
                                ) : null}
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg"
                                    name="email"
                                    onBlur={onEmailValidate}
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
                                    onBlur={onPasswordValidate}
                                />
                                <label
                                    className="form-label"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="form-outline mb-4">
                                {errors.rePassword ? (
                                    <AlerMessage msg={errors.rePassword} />
                                ) : null}
                                <input
                                    type="password"
                                    id="rePassword"
                                    name="rePassword"
                                    className="form-control form-control-lg"
                                    onBlur={onRePasswordValidate}
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
