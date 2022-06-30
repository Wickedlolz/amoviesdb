import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import Catalog from './components/Catalog/Catalog';
import MovieDetails from './components/Details/MovieDetails';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';
import Edit from './components/Edit/Edit';
import NotFound from './components/NotFound/NotFound';
import Create from './components/Create/Create';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Container>
            <NavBar />
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/profile/edit/:id" element={<EditProfile />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Container>
    );
}

export default App;
