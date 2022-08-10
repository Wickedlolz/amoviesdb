import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getPersonById } from '../../services/tmdb-api';
import LoadingSpinner from '../Common/LoadingSpinner';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from './Person.module.css';

function Person() {
    const [person, setPerson] = useState({});
    const [personCredits, setPersonCredits] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { personId } = useParams();

    useEffect(() => {
        getPersonById(personId)
            .then(([person, personMovieCredits]) => {
                setPerson(person);
                setPersonCredits(personMovieCredits);
                setIsLoading(false);
            })
            .catch((error) => console.log(error.message));
    }, [personId]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="container">
            <h1 className="my-4">{person.name}</h1>

            <div className="row">
                <div className="col-md-8">
                    <img
                        className="img-fluid"
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt="img"
                    />
                </div>

                <div className="col-md-4">
                    <h3 className="my-3">Biography</h3>
                    <p>{person.biography}</p>
                    <p>
                        <span className="text-muted">Birthday</span>:{' '}
                        {person.birthday}
                    </p>
                    <p>
                        <span className="text-muted">Place of birth:</span>:{' '}
                        {person.place_of_birth}
                    </p>
                    <h3 className="my-3">Known For</h3>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        centerMode={false}
                        containerClass="container-with-dots"
                        draggable
                        focusOnSelect={false}
                        infinite
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover={true}
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024,
                                },
                                items: 2,
                                partialVisibilityGutter: 40,
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0,
                                },
                                items: 1,
                                partialVisibilityGutter: 30,
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464,
                                },
                                items: 2,
                                partialVisibilityGutter: 30,
                            },
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        slidesToSlide={1}
                        swipeable
                    >
                        {personCredits.cast.map((item) => (
                            <div
                                key={item.id}
                                className="card bg-white text-white"
                            >
                                <img
                                    src={
                                        'https://image.tmdb.org/t/p/w500' +
                                            item.backdrop_path ||
                                        item.poster_path
                                    }
                                    className="card-img"
                                    alt="movie poster"
                                />
                                <div
                                    className={`card-img-overlay ${styles['overlay-card']}`}
                                >
                                    <h5 className="card-title text-white text-center">
                                        {item.title}
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Person;
