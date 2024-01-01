import { useState, useEffect, useCallback } from 'react';

const useFetch = (url, initialPage = 1, limit = 10) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(initialPage);

    const fetchData = useCallback(() => {
        setLoading(true);
        fetch(`${url}?_page=${page}&_limit=${limit}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(jsonData => {
                console.log(jsonData)
                setData(prevData => [...prevData, ...jsonData]);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url, page, limit]);

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return { data, loading, error, page, setPage };
};

export default useFetch;