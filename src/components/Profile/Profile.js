import { Link } from 'react-router-dom';
import { isAuth } from '../../hoc/isAuth';

function Profile() {
    return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-secondary">
                        <img
                            src="/images/wvxPV9S.png"
                            height="100"
                            width="100"
                            alt="profile"
                        />
                    </button>
                    <span className="name mt-3">Eleanor Pena</span>
                    <span className="idd">@eleanorpena</span>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <span className="idd1">Oxc4c16a645_b21a</span>
                    </div>
                    {/* <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                        <span className="number">
                            1069 <span className="follow">Followers</span>
                        </span>
                    </div> */}
                    <div className="d-flex mt-2">
                        <Link to={'/profile/edit/24'} className="btn btn-dark">
                            Edit Profile
                        </Link>
                    </div>
                    <div className="px-2 rounded mt-4 date ">
                        <span className="join">Joined May,2021</span>
                    </div>
                    <div className="d-flex mt-2">
                        <button className="btn btn-dark">Show My Movies</button>
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
    );
}

export default isAuth(Profile);
