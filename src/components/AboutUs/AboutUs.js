import { At, TelephoneFill } from 'react-bootstrap-icons';

function AboutUs() {
    return (
        <>
            <div className="bg-light">
                <div className="container py-5">
                    <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6">
                            <h1 className="display-4">About us</h1>
                            <p className="lead text-muted mb-0">
                                AMoviesDB is a place where can find and create
                                most liked and most popular movies which you
                                like.
                            </p>
                            <p className="lead text-muted">
                                We maintain and support the applicaiton.
                            </p>
                            <p className="lead text-muted">
                                We accept any new ideas to improve and grow this
                                project. If you have and want to help, can
                                contact us, see section below.
                            </p>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <img
                                src="/images/illus.png"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-5">
                <div className="container py-5">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <h2 className="font-weight-light">Contact</h2>
                            <dl className="row">
                                <dt className="col-sm-3">
                                    <At /> Email adress:
                                </dt>
                                <dd className="col-sm-9">
                                    amoviesdb@gmail.com
                                </dd>

                                <dt className="col-sm-3">
                                    <TelephoneFill /> Phone number:
                                </dt>
                                <dd className="col-sm-9">
                                    <p>+XXX-XXXX-XXX</p>
                                </dd>
                            </dl>
                        </div>
                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                            <img
                                src="/images/img-1.jpg"
                                alt=""
                                className="img-fluid mb-4 mb-lg-0"
                            />
                        </div>
                    </div>
                    {/* <div className="row align-items-center">
                        <div className="col-lg-5 px-5 mx-auto">
                            <img
                                src="/images/img-2.jpg"
                                alt=""
                                className="img-fluid mb-4 mb-lg-0"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="font-weight-light">
                                Lorem ipsum dolor sit amet
                            </h2>
                            <p className="font-italic text-muted mb-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a
                                href="#/"
                                className="btn btn-light px-5 rounded-pill shadow-sm"
                            >
                                Learn More
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default AboutUs;
