import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { isUser } from '../../hoc/isUser';
import { NotificationContext } from '../../contexts/Notification';
import * as userService from '../../services/user';

import LoadingSpinner from '../Common/LoadingSpinner';

function Profile() {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { addNotification } = useContext(NotificationContext);

    useEffect(() => {
        userService
            .getById(userId)
            .then((user) => {
                setUser(user);
                setIsLoading(false);
            })
            .catch((error) => addNotification(error.message, 'Error'));
    }, [userId, addNotification]);

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
                                    src={user.avatar}
                                    height="100"
                                    width="100"
                                    alt="profile"
                                />
                            </button>
                            <span className="name mt-3">
                                {user.firstName} {user.lastName}
                            </span>
                            <span className="idd">@{user.username}</span>
                            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                <span className="idd1">{user._id}</span>
                            </div>
                            <div className="d-flex mt-2">
                                <Link
                                    to={'/profile/edit/' + user._id}
                                    className="btn btn-dark"
                                >
                                    Edit Profile
                                </Link>
                            </div>
                            <div className="px-2 rounded mt-4 date ">
                                <span className="join">
                                    Last updated:{' '}
                                    {new Date(
                                        user.updatedAt
                                    ).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="d-flex mt-2">
                                <Link
                                    to={'/my-movies/' + user._id}
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

export default isUser(Profile);
