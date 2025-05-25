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

    const removeNotification = (id) => {
        setNotifications((prevState) =>
            prevState.filter((notif) => notif.id != id)
        );
    };

    return { notifications, addNotification, removeNotification };
};

export { useNotifications };
