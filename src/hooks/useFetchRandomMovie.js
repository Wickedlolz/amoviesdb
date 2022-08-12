import { useState, useEffect, useContext } from 'react';
import { NotificationContext } from '../contexts/Notification';
import { endpoints, getAll } from '../services/tmdb-api';

const useFetchRandomMovie = () => {
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { addNotification } = useContext(NotificationContext);

    useEffect(() => {
        setIsLoading(true);
        getAll(endpoints.UPCOMING)
            .then((result) =>
                setMovie(result[Math.floor(Math.random() * result.length)])
            )
            .catch((error) => addNotification(error.message, 'Error'))
            .finally(() => setIsLoading(false));
    }, [addNotification]);

    return [movie, isLoading];
};

export default useFetchRandomMovie;
