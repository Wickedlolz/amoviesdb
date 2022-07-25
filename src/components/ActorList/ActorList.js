import { useState, useEffect } from 'react';
import { getAll } from '../../services/tmdb-api';
import { Row, Col } from 'react-bootstrap';
import ActorCard from './ActorCard';

function ActorList({ fetchUrl }) {
    const [actors, setActors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getAll(fetchUrl)
            .then((result) => {
                setActors(result);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, [fetchUrl]);

    return (
        <Row xs={1} md={4} className="g-3">
            {actors.map((actor) => (
                <Col key={actor.id}>
                    <ActorCard actor={actor} />
                </Col>
            ))}
        </Row>
    );
}

export default ActorList;