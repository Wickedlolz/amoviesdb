import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as userService from '../../services/user';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import styles from './EditProfile.module.css';

function EditProfile() {
    const { id: userId } = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        userService
            .getById(userId)
            .then((userData) => {
                setUser(userData);
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
                    <form>
                        <div className={styles['edit-profile-card']}>
                            {' '}
                            <div className={styles.info}>
                                {' '}
                                <span>Edit Viktor's Profile</span>{' '}
                                <button id="savebutton">edit</button>{' '}
                            </div>{' '}
                            <div className={styles.forms}>
                                {' '}
                                <div className={styles.inputs}>
                                    {' '}
                                    <span>First Name</span>{' '}
                                    <input
                                        type="text"
                                        name="firstName"
                                        defaultValue={user.firstName}
                                    />{' '}
                                </div>{' '}
                                <div className={styles.inputs}>
                                    {' '}
                                    <span>Last Name</span>{' '}
                                    <input
                                        type="text"
                                        name="lastName"
                                        defaultValue={user.lastName}
                                    />{' '}
                                </div>{' '}
                                <div className={styles.inputs}>
                                    {' '}
                                    <span>Email</span>{' '}
                                    <input
                                        type="text"
                                        name="email"
                                        defaultValue={user.email}
                                    />{' '}
                                </div>{' '}
                                <div className={styles.inputs}>
                                    {' '}
                                    <span>Username</span>{' '}
                                    <input
                                        type="text"
                                        name="username"
                                        defaultValue={user.username}
                                    />{' '}
                                </div>{' '}
                                <div className={styles.inputs}>
                                    {' '}
                                    <span>Avatar</span>
                                    <span className={styles['allowed-formats']}>
                                        Allowed formats: png/svg
                                    </span>
                                    <input type="file" name="avatar" />{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default EditProfile;
