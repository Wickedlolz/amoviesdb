import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContext from './contexts/Auth';

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
import { getUserData } from './utils/utils';

function App() {
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(getUserData());
    }, []);

    const addUser = (user) => setUser(user);

    return (
        <AuthContext.Provider value={{ user, addUser }}>
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
        </AuthContext.Provider>
    );
}

export default App;
