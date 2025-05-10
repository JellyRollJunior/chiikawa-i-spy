import { useEffect, useState } from 'react';
import { getUrl } from '../utils/serverUrl.js';
import { getRequest } from '../utils/requests.js';

const useGames = () => {
    const [games, setGames] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const fetchGames = async () => {
            try {
                const data = await getRequest(getUrl('/games'), {
                    mode: 'cors',
                    signal: controller.signal,
                });
                setGames(data.games);
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

    return { games, loading, error };
};

export { useGames };
