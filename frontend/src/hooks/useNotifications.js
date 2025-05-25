import { useState } from 'react';

const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);
    
    const addNotification = (message, successNotification) => {
        const id = crypto.randomUUID();
        setNotifications((prevState) => [
            ...prevState,
            {
                id,
                message,
                successNotification,
            },
        ]);
        return id;
    };

    return { notifications, addNotification}
};

export { useNotifications };
