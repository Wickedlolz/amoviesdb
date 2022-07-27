import React from 'react';
import useFetchRandomMovie from '../../hooks/useFetchRandomMovie';
import { truncateString } from '../../utils/utils';
import Home from '../Home/Home';

import styles from './Main.module.css';

function Main() {
    const [movie] = useFetchRandomMovie();

    return (
        <>
            <div
                className={`p-5 text-center bg-image ${styles['jumbotron-image']}`}
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                }}
            >
                <div className={`mask ${styles['jumbotron-mask']}`}>
                    <div className="d-flex align-items-center">
                        <div className="text-white">
                            <h1 className="mb-3 m-2">{movie?.title}</h1>
                            <p className="mb-3 m-2">
                                {truncateString(movie?.overview, 150)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Home />
        </>
    );
}

export default Main;
