import { useEffect, useState } from 'react';

function useFetch(url, headers) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [result, setResult] = useState();

    useEffect(() => {
        async function fetchRequest() {
            try {
                setLoading(true);
                setError(false);
                const response = await fetch(url, {
                    method: 'GET',
                    headers
                });
                const data = await response.json();
                setLoading(false);
                setResult(data);
            } catch (err) {
                console.log(err.message);
                setLoading(false);
                setError(true);
            }
        }
        fetchRequest();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        loading,
        error,
        result
    };
}

export default useFetch;
