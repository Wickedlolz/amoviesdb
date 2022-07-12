import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/Auth';
import { NotificationContext } from '../../contexts/Notification';
import { Link, useNavigate } from 'react-router-dom';
import * as userService from '../../services/user';

import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';
import styles from './SignUp.module.css';
import { AlertMessage } from '../Common/AlertMessage';
import { setUserData } from '../../utils/utils';

function SignUp() {
    const { addUser } = useContext(AuthContext);
    const [isVisible, setIsVisivle] = useState(false);
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { addNotification } = useContext(NotificationContext);
    const navigate = useNavigate();

    const onTermsClickHandler = () => setIsVisivle(true);
    const onTermsClose = () => setIsVisivle(false);

    const onSubmitSignUp = (data) => {
        userService
            .signUp({
                firstName: data.firstName,
                lastName: data.lastName,
                username: data.username,
                email: data.email,
                password: data.password,
            })
            .then((userData) => {
                addUser(userData);
                setUserData(userData);
                addNotification('Successfully registerd.', 'Success');
                navigate('/');
            })
            .catch((error) => {
                addNotification(error.message, 'Alert');
            });
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
                        <form onSubmit={handleSubmit(onSubmitSignUp)}>
                            <div className="form-outline mb-4">
                                {errors.firstName?.type === 'required' && (
                                    <AlertMessage
                                        msg={'First Name is required.'}
                                    />
                                )}

                                {errors.firstName?.type === 'minLength' && (
                                    <AlertMessage
                                        msg={
                                            'First Name must be at least 3 characters long.'
                                        }
                                    />
                                )}
                                <input
                                    type="text"
                                    id="firstName"
                                    className="form-control form-control-lg"
                                    name="firstName"
                                    {...register('firstName', {
                                        required: true,
                                        minLength: 3,
                                    })}
                                />
                                <label
                                    className="form-label"
                                    htmlFor="firstName"
                                >
                                    First Name
                                </label>
                            </div>
                            <div className="form-outline mb-4">
                                {errors.lastName?.type === 'required' && (
                                    <AlertMessage
                                        msg={'Last Name is required.'}
                                    />
                                )}

                                {errors.lastName?.type === 'minLength' && (
                                    <AlertMessage
                                        msg={
                                            'Last Name must be at least 3 characters long.'
                                        }
                                    />
                                )}
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-control form-control-lg"
                                    name="lastName"
                                    {...register('lastName', {
                                        required: true,
                                        minLength: 3,
                                    })}
                                />
                                <label
                                    className="form-label"
                                    htmlFor="lastName"
                                >
                                    Last Name
                                </label>
                            </div>
                            <div className="form-outline mb-4">
                                {errors.username?.type === 'required' && (
                                    <AlertMessage
                                        msg={'Username is required.'}
                                    />
                                )}

                                {errors.username?.type === 'pattern' && (
                                    <AlertMessage
                                        msg={
                                            'Username must contains only letters and digits and must be at least 3 characters long.'
                                        }
                                    />
                                )}
                                <input
                                    type="text"
                                    id="username"
                                    className="form-control form-control-lg"
                                    name="username"
                                    {...register('username', {
                                        required: true,
                                        pattern: /^[A-Za-z0-9]{3,}$/,
                                    })}
                                />
                                <label
                                    className="form-label"
                                    htmlFor="username"
                                >
                                    Username
                                </label>
                            </div>
                            <div className="form-outline mb-4">
                                {errors.email?.type === 'required' && (
                                    <AlertMessage msg={'Email is required.'} />
                                )}

                                {errors.email?.type === 'pattern' && (
                                    <AlertMessage
                                        msg={
                                            'Invalid email. Email format must be (example@yahoo.com)'
                                        }
                                    />
                                )}
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg"
                                    name="email"
                                    {...register('email', {
                                        required: true,
                                        pattern:
                                            /^[A-Za-z0-9]{2,}@[a-z]+\.[a-z]{2,3}$/,
                                    })}
                                />
                                <label className="form-label" htmlFor="email">
                                    Email address
                                </label>
                            </div>
                            <div className="form-outline mb-4">
                                {errors.password?.type === 'required' && (
                                    <AlertMessage
                                        msg={'Password is required.'}
                                    />
                                )}

                                {errors.password?.type === 'minLength' && (
                                    <AlertMessage
                                        msg={
                                            'Password must be at least 3 characters long.'
                                        }
                                    />
                                )}
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control form-control-lg"
                                    {...register('password', {
                                        required: true,
                                        minLength: 3,
                                    })}
                                />
                                <label
                                    className="form-label"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="form-outline mb-4">
                                {errors.rePassword?.type === 'required' && (
                                    <AlertMessage
                                        msg={'Re-Password is required.'}
                                    />
                                )}

                                {errors.rePassword?.type === 'validate' && (
                                    <AlertMessage
                                        msg={'Passwords not match!'}
                                    />
                                )}
                                <input
                                    type="password"
                                    id="rePassword"
                                    name="rePassword"
                                    className="form-control form-control-lg"
                                    {...register('rePassword', {
                                        required: true,
                                        validate: (value) => {
                                            if (watch('password') !== value) {
                                                return 'Passwords not identical.';
                                            }
                                        },
                                    })}
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
                                    {...register('acceptTerms', {
                                        required: true,
                                    })}
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
                                        <u>Terms of Conditions</u>
                                    </span>
                                </label>
                            </div>
                            {errors.acceptTerms && (
                                <AlertMessage
                                    msg={'Terms of Conditions is not accepted.'}
                                />
                            )}
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
