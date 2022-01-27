import { useState, useEffect, useDebugValue } from "react";

export default function useFetch(endPoint) {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState({});

    useDebugValue({ data, status });

    useEffect(() => {
        const fetchData = async () => {
            setStatus('fetching');
            const response = await fetch(endPoint);
            const data = await response.json();
            setData(data);
            setStatus('fetched');
        };

        fetchData();
    }, [endPoint]);

    return { status, data };
};
