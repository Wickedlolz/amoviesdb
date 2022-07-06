import { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [state, setState] = useState({
        show: false,
        message: '',
        type: 'error',
    });

    return (
        <NotificationContext.Provider value={{ state }}>
            {children}
        </NotificationContext.Provider>
    );
};
