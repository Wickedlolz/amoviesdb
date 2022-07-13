import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as userService from '../../services/user';
import { AuthContext } from '../../contexts/Auth';
import { NotificationContext } from '../../contexts/Notification';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { AlertMessage } from '../Common/AlertMessage';
import { PersonLinesFill } from 'react-bootstrap-icons';

import styles from './EditProfile.module.css';

function EditProfile() {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [errors, setErrors] = useState({ emptyFields: false });
    const [isLoading, setIsLoading] = useState(true);
    const { updateUser } = useContext(AuthContext);
    const { addNotification } = useContext(NotificationContext);
    const navigate = useNavigate();

    useEffect(() => {
        userService
            .getById(userId)
            .then((userData) => {
                setUser(userData);
                setIsLoading(false);
            })
            .catch((error) => addNotification(error.message, 'Error'));
    }, [userId, addNotification]);

    const onSubmitEditProfile = (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.target);
        const firstName = formData.get('firstName').trim();
        const lastName = formData.get('lastName').trim();
        const email = formData.get('email').trim();
        const username = formData.get('username').trim();

        if (
            firstName == '' ||
            lastName == '' ||
            email == '' ||
            username == ''
        ) {
            setErrors({ emptyFields: true });
            return;
        }

        userService
            .updateById(userId, formData)
            .then((userData) => {
                addNotification('User successfully updated.', 'Success');
                updateUser(userData);
            })
            .catch((error) => {
                addNotification(error.message, 'Error');
            })
            .finally(() => navigate('/profile/' + userId));
    };

    return (
        <>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                    {errors.emptyFields ? (
                        <AlertMessage msg="All fields are required." />
                    ) : null}
                    <form onSubmit={onSubmitEditProfile}>
                        <div className={styles['edit-profile-card']}>
                            {' '}
                            <div className={styles.info}>
                                {' '}
                                <span>
                                    <PersonLinesFill /> Edit {user.firstName}'s
                                    Profile{' '}
                                </span>{' '}
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
                                        Allowed formats: png/jpg if is any other
                                        will not show
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
