import { useEffect, useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { NotificationContext } from '../../contexts/Notification';
import { useAuthContext } from '../../contexts/Auth';
import * as userService from '../../services/user';

import LoadingSpinner from '../Common/LoadingSpinner';

function Profile() {
    const { userId } = useParams();
    const [currentUser, setCurrentUser] = useState({});
    const { user } = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);
    const { addNotification } = useContext(NotificationContext);
    const navigate = useNavigate();

    useEffect(() => {
        userService
            .getById(userId)
            .then((userData) => {
                if (userData._id !== user?.id) {
                    return navigate('/', { replace: true });
                }

                setCurrentUser(userData);
                setIsLoading(false);
            })
            .catch((error) => addNotification(error.message, 'Error'));
    }, [userId, addNotification, navigate, user]);

    return (
        <>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                    <div className="card p-4">
                        <div className=" image d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-secondary">
                                <img
                                    src={currentUser.avatar}
                                    height="100"
                                    width="100"
                                    alt="profile"
                                />
                            </button>
                            <span className="name mt-3">
                                {currentUser.firstName} {currentUser.lastName}
                            </span>
                            <span className="idd">@{currentUser.username}</span>
                            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                <span className="idd1">{currentUser._id}</span>
                            </div>
                            <div className="d-flex mt-2">
                                <Link
                                    to={'/profile/edit/' + currentUser._id}
                                    className="btn btn-dark"
                                >
                                    Edit Profile
                                </Link>
                            </div>
                            <div className="px-2 rounded mt-4 date ">
                                <span className="join">
                                    Last updated:{' '}
                                    {new Date(
                                        currentUser.updatedAt
                                    ).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="d-flex mt-2">
                                <Link
                                    to={'/my-movies/' + currentUser._id}
                                    className="btn btn-dark"
                                >
                                    Show My Movies
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;
