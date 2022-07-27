import { useState, useEffect } from 'react';

import { endpoints, getAll } from '../services/tmdb-api';

const useFetchRandomMovie = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const movie = movies[Math.floor(Math.random() * movies?.length)];

    useEffect(() => {
        setIsLoading(true);
        getAll(endpoints.POPULAR)
            .then((result) => setMovies(result))
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }, []);

    return [movie, isLoading];
};

export default useFetchRandomMovie;
