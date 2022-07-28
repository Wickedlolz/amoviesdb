import useFetchRandomMovie from '../../hooks/useFetchRandomMovie';
import { truncateString } from '../../utils/utils';
import Home from '../Home/Home';
import LoadingSpinner from '../Common/LoadingSpinner';

import styles from './Main.module.css';

function Main() {
    const [movie, isLoading] = useFetchRandomMovie();

    return (
        <>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div
                    className={`p-5 text-center bg-image ${styles['jumbotron-image']}`}
                    style={{
                        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    }}
                >
                    <div className={`mask ${styles['jumbotron-mask']}`}>
                        <div className="align-items-center">
                            <div className="text-white">
                                <h1 className="mb-3 m-2">{movie?.title}</h1>
                                <p className="mb-3 m-2">
                                    {truncateString(movie?.overview, 150)}
                                </p>
                                <p className="m-2">
                                    Released: {movie?.release_date}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Home />
        </>
    );
}

export default Main;
