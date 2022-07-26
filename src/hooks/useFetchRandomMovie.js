import { useState, useEffect } from 'react';

import { endpoints, getAll } from '../services/tmdb-api';

const useFetchRandomMovie = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies?.length)];

    useEffect(() => {
        getAll(endpoints.POPULAR)
            .then((result) => setMovies(result))
            .catch((error) => console.log(error));
    }, []);

    return [movie];
};

export default useFetchRandomMovie;
