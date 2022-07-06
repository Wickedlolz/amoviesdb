import { createContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState({
        show: false,
        message: '',
        type: '',
    });

    const addNotification = useCallback(
        (message, notifyType) =>
            setNotification({ show: true, message, type: notifyType }),
        []
    );

    const clearNotification = useCallback(
        () => setNotification({ show: false, message: '' }),
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
