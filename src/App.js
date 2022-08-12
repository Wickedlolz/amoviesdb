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
import NotFound from './components/Common/NotFound';
import Create from './components/Create/Create';
import Footer from './components/Footer/Footer';
import SignOut from './components/SignOut/SignOut';
import Notification from './components/Common/Notification';
import MyMovies from './components/MyMovies/MyMovies';
import AboutUs from './components/AboutUs/AboutUs';
import Main from './components/Main/Main';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ProtectedRoute from './components/Common/ProtectedRoute';
import PublicRoute from './components/Common/PublicRoute';
import Hero from './components/Hero/Hero';
import Person from './components/Person/Person';

function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <NotificationProvider>
                    <Container>
                        <NavBar />
                        <Notification />
                        <Routes>
                            <Route path="/" element={<Hero />} />
                            <Route path="/home" element={<Main />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route
                                path="/movie/:movieId"
                                element={<MovieDetails />}
                            />
                            <Route
                                path="/person/:personId"
                                element={<Person />}
                            />
                            <Route element={<PublicRoute />}>
                                <Route path="/signin" element={<SignIn />} />
                                <Route path="/signup" element={<SignUp />} />
                            </Route>
                            <Route element={<ProtectedRoute />}>
                                <Route
                                    path="/profile/:userId"
                                    element={<Profile />}
                                />
                                <Route
                                    path="/profile/edit/:userId"
                                    element={<EditProfile />}
                                />
                                <Route
                                    path="/my-movies/:userId"
                                    element={<MyMovies />}
                                />
                                <Route path="/create" element={<Create />} />
                                <Route
                                    path="/edit/:movieId"
                                    element={<Edit />}
                                />
                                <Route path="/signout" element={<SignOut />} />
                            </Route>
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                        <Footer />
                    </Container>
                </NotificationProvider>
            </AuthProvider>
        </ErrorBoundary>
    );
}

export default App;
