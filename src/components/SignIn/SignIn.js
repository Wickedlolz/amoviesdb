import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { NotificationContext } from '../../contexts/Notification';
import { Link, useNavigate } from 'react-router-dom';
import * as userService from '../../services/user';
import { useForm } from 'react-hook-form';
import { setUserData } from '../../utils/utils';
import { AlertMessage } from '../Common/AlertMessage';

function SignIn() {
    const navigate = useNavigate();
    const { addUser } = useContext(AuthContext);
    const { addNotification } = useContext(NotificationContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmitSignIn = (data) => {
        userService
            .signIn(data.email, data.password)
            .then((userData) => {
                addUser(userData);
                setUserData(userData);
                navigate('/');
            })
            .catch((error) => {
                addNotification(error.message, 'Alert');
            });
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
                        <form onSubmit={handleSubmit(onSubmitSignIn)}>
                            <div className="form-outline mb-4">
                                {errors.email?.type === 'required' && (
                                    <AlertMessage msg={'Email is required'} />
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
                                        msg={'Password is required'}
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
