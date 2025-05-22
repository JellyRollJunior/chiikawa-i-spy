import { useEffect, useState } from 'react';
import { makeRequest } from '../utils/requests';
import { getUrl } from '../utils/serverUrl';

const useWinners = () => {
    const [winners, setWinner] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const fetchWinners = async () => {
            setLoading(true);
            try {
                const data = await makeRequest(getUrl('/winners'), {
                    mode: 'cors',
                    method: 'get',
                    signal: controller.signal,
                });
                setWinner(data.winners);
            } catch (error) {
                console.error(error);
                setError('Unable to fetch winners');
            } finally {
                setLoading(false);
            }
        };

        fetchWinners();
    }, []);

    return { winners, loading, error };
};

export { useWinners };
