import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import Catalog from './components/Catalog/Catalog';
import MovieDetails from './components/Details/MovieDetails';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';
import Edit from './components/Edit/Edit';
import DeleteModal from './components/DeleteModal/DeleteModal';
import NotFound from './components/NotFound/NotFound';
import Create from './components/Create/Create';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Container>
            <NavBar />
            <Catalog />
            {/* <MovieDetails /> */}
            {/* <SignIn /> */}
            {/* <SignUp /> */}
            {/* <Profile /> */}
            {/* <EditProfile /> */}
            {/* <Edit /> */}
            {/* <Create /> */}
            {/* <DeleteModal /> */}
            {/* <NotFound /> */}
            <Footer />
        </Container>
    );
}

export default App;
