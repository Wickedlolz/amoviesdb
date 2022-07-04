import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { isAuth } from '../../hoc/isAuth';

import * as userService from '../../services/user';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function Profile() {
    const { id: userId } = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        userService
            .getById(userId)
            .then((user) => {
                setUser(user);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, [userId]);

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
                            {/* <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                        <span className="number">
                            1069 <span className="follow">Followers</span>
                        </span>
                    </div> */}
                            <div className="d-flex mt-2">
                                <Link
                                    to={'/profile/edit/' + user._id}
                                    className="btn btn-dark"
                                >
                                    Edit Profile
                                </Link>
                            </div>
                            <div className="px-2 rounded mt-4 date ">
                                <span className="join">Joined May,2021</span>
                            </div>
                            <div className="d-flex mt-2">
                                <Link
                                    to={'/my-movies/' + user._id}
                                    className="btn btn-dark"
                                >
                                    Show My Movies
                                </Link>
                            </div>
                            {/* <div className="text mt-3">
                        <p>
                            Avengers Endgame{' '}
                            <button className="btn btn-light">Details</button>
                        </p>
                        <p>
                            Doctor Strange Multiverse of Madness{' '}
                            <button className="btn btn-light">Details</button>
                        </p>
                    </div> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default isAuth(Profile);
