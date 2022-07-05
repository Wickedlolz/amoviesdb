import { createContext, useContext, useState, useEffect } from 'react';
import { getUserData, removeUserData } from '../utils/utils';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(getUserData());
    }, []);

    const addUser = (user) => setUser(user);
    const updateUser = (userData) => {
        setUser((state) => ({
            ...state,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
        }));
    };

    const logout = () => {
        removeUserData();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, addUser, updateUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
};
