import { useEffect, useState } from 'react';
import { getURL } from '../utils/serverRequest.js';

const useGames = () => {
    const [games, setGames] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const fetchGames = async () => {
            try {
                const response = await fetch(getURL('/games'), {
                    mode: 'cors',
                });
                if (!response.ok) {
                    // handle errors
                }
                const json = await response.json();
                setGames(json.games);
            } catch (error) {
                // handle error;
                console.log(error);
            }
        };

        fetchGames();

        return () => controller.abort();
    }, []);

    return games;
};

export { useGames };
