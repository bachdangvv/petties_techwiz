import { useState, useEffect } from "react";

export default function useFetchData(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(true);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url);
                
                const result = await response.json();

                setError(null);
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, [url]);

    return { data, error, isLoading };
};