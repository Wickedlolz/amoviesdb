import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div
            className="text-center"
            style={{
                backgroundImage: `url("/images/hero-background.jpg")`,
                backgroundSize: 'cover',
            }}
        >
            <img
                src="/images/cta-logo-one.svg"
                alt="hero-logo"
                className="img-fluid rounded-3 shadow-lg mb-4"
                width={700}
                height={500}
                loading="lazy"
                style={{ paddingTop: '100px' }}
            />
            <div className="col-lg-6 mx-auto text-white">
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5 p-2">
                    <Link
                        to={'/home'}
                        type="button"
                        className="btn btn-primary btn-lg px-5 me-sm-3 fw-bold"
                    >
                        GET ALL THERE
                    </Link>
                </div>
                <p className="lead mb-4">
                    The best stories in the world, all in one place.
                </p>
            </div>
            <div
                className="overflow-hidden p-3"
                style={{ maxHeight: 30 + 'vh' }}
            >
                <div className="container px-5">
                    <img
                        src="/images/cta-logo-two.png"
                        className="img-fluid rounded-3 shadow-lg mb-4"
                        alt="hero-logo-two"
                        width="700"
                        height="500"
                        loading="lazy"
                    />
                </div>
            </div>
            <div style={{ padding: '100px' }}></div>
        </div>
    );
}

export default Hero;
