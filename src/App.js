import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import Catalog from './components/Catalog/Catalog';

function App() {
    return (
        <Container>
            <NavBar />
            <Catalog />
        </Container>
    );
}

export default App;
