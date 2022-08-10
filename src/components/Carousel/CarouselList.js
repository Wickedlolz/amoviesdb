import { useState, useEffect, useContext, memo } from 'react';
import { getAll } from '../../services/tmdb-api';
import { NotificationContext } from '../../contexts/Notification';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CarouselItem from './CarouselItem';
import LoadingSpinner from '../Common/LoadingSpinner';

function CarouselList({ fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { addNotification } = useContext(NotificationContext);

    useEffect(() => {
        getAll(fetchUrl)
            .then((result) => {
                setMovies(result);
                setIsLoading(false);
            })
            .catch((error) => addNotification(error.message, 'Error'));
    }, [fetchUrl, addNotification]);

    return (
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
                    items: 4,
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
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                movies.map((movie) => (
                    <CarouselItem key={movie.id} movie={movie} />
                ))
            )}
        </Carousel>
    );
}

export default memo(CarouselList);
