import { createContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState({
        show: false,
        message: '',
        type: '',
    });

    const addNotification = (message, notifyType) => {
        setNotification({ show: true, message, type: notifyType });

        setTimeout(() => {
            setNotification({ show: false, message: '', type: '' });
        }, 3000);
    };

    const clearNotification = useCallback(
        () => setNotification({ show: false, message: '', type: '' }),
        []
    );

    return (
        <NotificationContext.Provider
            value={{ notification, addNotification, clearNotification }}
        >
            {children}
        </NotificationContext.Provider>
    );
};
