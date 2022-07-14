import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
} from 'react';
import { getUserData, removeUserData } from '../utils/utils';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        id: '',
        accessToken: '',
    });

    const getLocalStorageData = useCallback(() => getUserData(), []);

    useEffect(() => {
        setUser(getLocalStorageData);
    }, [getLocalStorageData]);

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
