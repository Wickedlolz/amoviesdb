import { useState, useContext } from 'react';
import { NotificationContext } from '../contexts/Notification';

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            let item = localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            addNotification(error.message, 'Error');
            return initialValue;
        }
    });

    const { addNotification } = useContext(NotificationContext);

    const setItem = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setState(value);
        } catch (error) {
            console.log(error);
            addNotification(error.message, 'Error');
        }
    };

    const updateUserData = (value) => {
        setState((state) => ({ ...state, ...value }));
    };

    return [state, setItem, updateUserData];
};

export default useLocalStorage;
