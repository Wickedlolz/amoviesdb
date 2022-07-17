import { createContext, useContext } from 'react';
import { removeUserData } from '../utils/utils';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null);

    const addUser = (user) => setUser(user);
    const updateUser = (userData) => {
        setUser((state) => ({
            ...state,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            avatar: userData.avatar,
        }));
    };

    const signOut = () => {
        removeUserData();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, addUser, updateUser, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
};
