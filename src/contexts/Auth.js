import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setItem, updateUserData] = useLocalStorage('user', null);

    const addUser = (user) => setItem(user);
    const updateUser = (userData) => {
        updateUserData(userData);
    };

    const signOut = () => {
        setItem(null);
    };

    const isAuthenticated = Boolean(user?.accessToken);

    return (
        <AuthContext.Provider
            value={{ user, addUser, updateUser, signOut, isAuthenticated }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
};
