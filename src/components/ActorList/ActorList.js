import { useState, useEffect, useContext } from 'react';
import { NotificationContext } from '../../contexts/Notification';
import { getAll } from '../../services/tmdb-api';
import { Row, Col } from 'react-bootstrap';
import ActorCard from './ActorCard';
import LoadingSpinner from '../Common/LoadingSpinner';

function ActorList({ fetchUrl }) {
    const [actors, setActors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { addNotification } = useContext(NotificationContext);

    useEffect(() => {
        setIsLoading(true);
        getAll(fetchUrl)
            .then((result) => {
                setActors(result);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                addNotification(error.message, 'Error');
            });
    }, [fetchUrl, addNotification]);

    return (
        <Row xs={2} md={5} className="g-3">
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                actors.map((actor) => (
                    <Col key={actor.id}>
                        <ActorCard actor={actor} />
                    </Col>
                ))
            )}
        </Row>
    );
}

export default ActorList;
