import { useEffect, useState } from 'react';
import { getURL } from '../utils/serverRequest.js';

const useGames = () => {
    const [games, setGames] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const fetchGames = async () => {
            try {
                const response = await fetch(getURL('/games'), {
                    mode: 'cors',
                    signal: controller.signal,
                });
                const json = await response.json();
                if (!response.ok) {
                    throw new Error(json.name);
                }
                setGames(json.games);
                setError(null);
            } catch (error) {
                console.log(error);
                setError('Unable to retrieve games.');
            } finally {
                setLoading(false);
            }
        };

        fetchGames();

        return () => controller.abort();
    }, []);

    return { games, loading, error};
};

export { useGames };
