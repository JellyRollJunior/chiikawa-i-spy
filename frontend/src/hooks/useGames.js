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
                const json = await response.json();
                if (!response.ok) {
                    //handle errors
                }
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
