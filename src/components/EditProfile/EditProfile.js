import styles from './EditProfile.module.css';

function EditProfile() {
    return (
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
                            <input type="text" name="firstName" />{' '}
                        </div>{' '}
                        <div className={styles.inputs}>
                            {' '}
                            <span>Last Name</span>{' '}
                            <input type="text" name="lastName" />{' '}
                        </div>{' '}
                        <div className={styles.inputs}>
                            {' '}
                            <span>Email</span>{' '}
                            <input type="text" name="email" />{' '}
                        </div>{' '}
                        <div className={styles.inputs}>
                            {' '}
                            <span>Username</span>{' '}
                            <input type="text" name="username" />{' '}
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
    );
}

export default EditProfile;
