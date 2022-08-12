import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/Auth';
import { NotificationContext } from '../../contexts/Notification';
import { Link, useNavigate } from 'react-router-dom';
import * as userService from '../../services/user';

import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';
import styles from './SignUp.module.css';
import { AlertMessage } from '../Common/AlertMessage';

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
                addNotification('Successfully registerd.', 'Success');
                navigate('/home');
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
                                        msg={errors.firstName.message}
                                    />
                                )}

                                {errors.firstName?.type === 'minLength' && (
                                    <AlertMessage
                                        msg={errors.firstName.message}
                                    />
                                )}
                                <input
                                    type="text"
                                    id="firstName"
                                    className="form-control form-control-lg"
                                    name="firstName"
                                    {...register('firstName', {
                                        required: {
                                            value: true,
                                            message: 'First Name is required.',
                                        },
                                        minLength: {
                                            value: 3,
                                            message:
                                                'First Name must be at least 3 characters long.',
                                        },
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
                                        msg={errors.lastName.message}
                                    />
                                )}

                                {errors.lastName?.type === 'minLength' && (
                                    <AlertMessage
                                        msg={errors.lastName.message}
                                    />
                                )}
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-control form-control-lg"
                                    name="lastName"
                                    {...register('lastName', {
                                        required: {
                                            value: true,
                                            message: 'Last Name is required.',
                                        },
                                        minLength: {
                                            value: 3,
                                            message:
                                                'Last Name must be at least 3 characters long.',
                                        },
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
                                        msg={errors.username.message}
                                    />
                                )}

                                {errors.username?.type === 'pattern' && (
                                    <AlertMessage
                                        msg={errors.username.message}
                                    />
                                )}
                                <input
                                    type="text"
                                    id="username"
                                    className="form-control form-control-lg"
                                    name="username"
                                    {...register('username', {
                                        required: {
                                            value: true,
                                            message: 'Username is required.',
                                        },
                                        pattern: {
                                            value: /^[A-Za-z0-9]{3,}$/,
                                            message:
                                                'Username must contains only letters and digits and must be at least 3 characters long.',
                                        },
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
                                    <AlertMessage msg={errors.email.message} />
                                )}

                                {errors.email?.type === 'pattern' && (
                                    <AlertMessage msg={errors.email.message} />
                                )}
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg"
                                    name="email"
                                    {...register('email', {
                                        required: {
                                            value: true,
                                            message: 'Email is required.',
                                        },
                                        pattern: {
                                            value: /^[A-Za-z0-9]{2,}@[a-z]+\.[a-z]{2,3}$/,
                                            message:
                                                'Invalid email. Email format must be (example@yahoo.com)',
                                        },
                                    })}
                                />
                                <label className="form-label" htmlFor="email">
                                    Email address
                                </label>
                            </div>
                            <div className="form-outline mb-4">
                                {errors.password?.type === 'required' && (
                                    <AlertMessage
                                        msg={errors.password.message}
                                    />
                                )}

                                {errors.password?.type === 'minLength' && (
                                    <AlertMessage
                                        msg={errors.password.message}
                                    />
                                )}
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control form-control-lg"
                                    {...register('password', {
                                        required: {
                                            value: true,
                                            message: 'Password is required.',
                                        },
                                        minLength: {
                                            value: 3,
                                            message:
                                                'Password must be at least 3 characters long.',
                                        },
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
                                        msg={errors.rePassword.message}
                                    />
                                )}

                                {errors.rePassword?.type === 'validate' && (
                                    <AlertMessage
                                        msg={errors.rePassword.message}
                                    />
                                )}
                                <input
                                    type="password"
                                    id="rePassword"
                                    name="rePassword"
                                    className="form-control form-control-lg"
                                    {...register('rePassword', {
                                        required: {
                                            value: true,
                                            message: 'Re-Password is required.',
                                        },
                                        validate: (value) => {
                                            if (watch('password') !== value) {
                                                return 'Passwords not match!';
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
                                        required: {
                                            value: true,
                                            message:
                                                'Terms of Conditions is not accepted.',
                                        },
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
