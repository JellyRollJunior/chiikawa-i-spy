import { useState } from 'react';

const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    const addErrorNotification = (message) => {
        const id = crypto.randomUUID();
        setNotifications((prevState) => [
            ...prevState,
            {
                id,
                message,
                isError: true,
            },
        ]);
        return id;
    };

    const removeNotification = (id) => {
        setNotifications((prevState) =>
            prevState.filter((notif) => notif.id != id)
        );
    };

    const addTimedNotification = async (message) => {
        const id = crypto.randomUUID();
        setNotifications((prevState) => [
            ...prevState,
            {
                id,
                message,
                isError: false,
            },
        ]);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        removeNotification(id);
    }

    return { notifications, addErrorNotification, addTimedNotification, removeNotification };
};

export { useNotifications };
