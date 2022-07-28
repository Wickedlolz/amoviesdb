import { useState, useEffect, useContext } from 'react';
import { NotificationContext } from '../contexts/Notification';
import { endpoints, getAll } from '../services/tmdb-api';

const useFetchRandomMovie = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { addNotification } = useContext(NotificationContext);

    const movie = movies[Math.floor(Math.random() * movies?.length)];

    useEffect(() => {
        setIsLoading(true);
        getAll(endpoints.POPULAR)
            .then((result) => setMovies(result))
            .catch((error) => addNotification(error.message, 'Error'))
            .finally(() => setIsLoading(false));
    }, []);

    return [movie, isLoading];
};

export default useFetchRandomMovie;
