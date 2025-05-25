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

    const addTimedNotification = async (message, successNotification) => {
        const id = crypto.randomUUID();
        setNotifications((prevState) => [
            ...prevState,
            {
                id,
                message,
                successNotification,
            },
        ]);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        removeNotification(id);
    }

    return { notifications, addNotification, addTimedNotification, removeNotification };
};

export { useNotifications };
