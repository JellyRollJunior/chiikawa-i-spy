import { useEffect, useState } from 'react';
import { makeRequest } from '../utils/requests.js';
import { getUrl } from '../utils/serverUrl.js';

const useGameSession = (gameId) => {
    const [assets, setAssets] = useState(null);
    const [targets, setTargets] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const fetchGameAssets = async () => {
            try {
                setLoading(true);
                const data = await makeRequest(getUrl(`/games/${gameId}/assets`), {
                    mode: 'cors',
                    signal: controller.signal,
                });
                const { token, targets, ...assets } = data;
                localStorage.setItem('token', token);
                setAssets(assets);
                setTargets(targets);
                setError(null);
            } catch (error) {
                console.log(error);
                setError('Unable to retrieve game session data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchGameAssets();

        return () => controller.abort();
    }, [gameId]);

    return { assets, targets, setTargets, error, loading };
};

export { useGameSession };
