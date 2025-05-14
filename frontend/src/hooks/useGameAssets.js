import { useEffect, useState } from 'react';
import { getRequest } from '../utils/requests.js';
import { getUrl } from '../utils/serverUrl.js';

const useGameAssets = (gameId) => {
    const [assets, setAssets] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const fetchGameAssets = async () => {
            try {
                setLoading(true);
                const data = await getRequest(getUrl(`/games/${gameId}/assets`), {
                    mode: 'cors',
                    signal: controller.signal,
                });
                console.log(data);
                setAssets(data);
                setError(null);
            } catch (error) {
                console.log(error);
                setError('Unable to retrieve game assets. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchGameAssets();

        return () => controller.abort();
    }, [gameId]);

    return { assets, error, loading };
};

export { useGameAssets };
