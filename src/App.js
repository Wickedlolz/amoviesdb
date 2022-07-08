import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth';
import { NotificationProvider } from './contexts/Notification';

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
import Logout from './components/Logout/Logout';
import Notification from './components/Common/Notification';
import MyMovies from './components/MyMovies/MyMovies';
import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';

function App() {
    return (
        <AuthProvider>
            <NotificationProvider>
                <Container>
                    <NavBar />
                    <Notification />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/profile/:userId" element={<Profile />} />
                        <Route
                            path="/profile/edit/:userId"
                            element={<EditProfile />}
                        />
                        <Route
                            path="/movie/:movieId"
                            element={<MovieDetails />}
                        />
                        <Route
                            path="/my-movies/:userId"
                            element={<MyMovies />}
                        />
                        <Route path="/create" element={<Create />} />
                        <Route path="/edit/:movieId" element={<Edit />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Container>
            </NotificationProvider>
        </AuthProvider>
    );
}

export default App;
