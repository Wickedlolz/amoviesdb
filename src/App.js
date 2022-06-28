import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import Catalog from './components/Catalog/Catalog';
import MovieDetails from './components/Catalog/MovieDetails';
import SignIn from './components/SignIn';

function App() {
    return (
        <Container>
            <NavBar />
            {/* <Catalog /> */}
            {/* <MovieDetails /> */}
            <SignIn />
        </Container>
    );
}

export default App;
