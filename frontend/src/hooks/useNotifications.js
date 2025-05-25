import { useState } from 'react';

const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    const addPersistentNotification = (message, isError = true) => {
        const id = crypto.randomUUID();
        setNotifications((prevState) => [
            ...prevState,
            {
                id,
                message,
                isError,
                isTimed: false,
            },
        ]);
        return id;
    };

    const removeNotification = (id) => {
        setNotifications((prevState) =>
            prevState.filter((notif) => notif.id != id)
        );
    };

    const addTimedNotification = async (message, isError = false, ms = 1500) => {
        const id = crypto.randomUUID();
        setNotifications((prevState) => [
            ...prevState,
            {
                id,
                message,
                isError,
                isTimed: true,
            },
        ]);
        await new Promise((resolve) => setTimeout(resolve, ms));
        removeNotification(id);
    }

    return { notifications, addPersistentNotification, addTimedNotification, removeNotification };
};

export { useNotifications };
