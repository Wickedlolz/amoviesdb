import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

const mockData = [
    {
        id: 1,
        title: 'Avengers',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        id: 2,
        title: 'Doctor Strange',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        id: 3,
        title: 'Spider-Man No Way Home',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        id: 4,
        title: 'Venom',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        id: 5,
        title: 'Batman',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        id: 6,
        title: 'League of Justice',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        id: 7,
        title: 'Morbius',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        id: 8,
        title: 'Hulk',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        id: 9,
        title: 'Iron Man',
        imageUrl: 'https://source.unsplash.com/random',
    },
];

function Catalog() {
    return (
        <Row xs={1} md={4} className="g-3">
            {mockData.map((m) => (
                <Col key={m.id}>
                    <MovieCard key={m.id} movie={m} />
                </Col>
            ))}
        </Row>
    );
}

export default Catalog;
