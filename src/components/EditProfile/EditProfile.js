import './EditProfile.css';

function EditProfile() {
    return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <form>
                <div className="edit-profile-card">
                    {' '}
                    <div className="info">
                        {' '}
                        <span>Edit Viktor's Profile</span>{' '}
                        <button id="savebutton">edit</button>{' '}
                    </div>{' '}
                    <div className="forms">
                        {' '}
                        <div className="inputs">
                            {' '}
                            <span>First Name</span>{' '}
                            <input type="text" name="firstName" />{' '}
                        </div>{' '}
                        <div className="inputs">
                            {' '}
                            <span>Last Name</span>{' '}
                            <input type="text" name="lastName" />{' '}
                        </div>{' '}
                        <div className="inputs">
                            {' '}
                            <span>Email</span>{' '}
                            <input type="text" name="email" />{' '}
                        </div>{' '}
                        <div className="inputs">
                            {' '}
                            <span>Username</span>{' '}
                            <input type="text" name="username" />{' '}
                        </div>{' '}
                        <div className="inputs">
                            {' '}
                            <span>Avatar</span>
                            <span>Allowed formats: png/svg</span>
                            <input type="file" name="avatar" />{' '}
                        </div>{' '}
                    </div>{' '}
                </div>
            </form>
        </div>
    );
}

export default EditProfile;
