import { createContext, useContext, useState, useEffect } from 'react';
import { getUserData, removeUserData } from '../utils/utils';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(getUserData());
    }, []);

    const addUser = (user) => setUser(user);
    const logout = () => {
        removeUserData();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, addUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
};
