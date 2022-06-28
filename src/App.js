import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import Catalog from './components/Catalog/Catalog';
import MovieDetails from './components/Catalog/MovieDetails';

function App() {
    return (
        <Container>
            <NavBar />
            {/* <Catalog /> */}
            <MovieDetails />
        </Container>
    );
}

export default App;
