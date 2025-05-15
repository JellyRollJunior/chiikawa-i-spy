import { useEffect, useState } from 'react';
import { makeRequest } from '../utils/requests.js';
import { getUrl } from '../utils/serverUrl.js';

const useGameSession = (gameId) => {
    const [session, setSession] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const fetchGameAssets = async () => {
            try {
                setLoading(true);
                const assetsPromise = makeRequest(getUrl(`/games/${gameId}/assets`), {
                    mode: 'cors',
                    signal: controller.signal,
                });
                const tokenPromise = makeRequest(getUrl(`/games/${gameId}/startTokens`), {
                    mode: 'cors',
                    signal: controller.signal
                })
                const [assets, token] = await Promise.all([assetsPromise, tokenPromise]);
                console.log({ ...assets, ...token });
                localStorage.setItem('token', token.token);
                setSession(assets);
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

    return { session, error, loading };
};

export { useGameSession };
