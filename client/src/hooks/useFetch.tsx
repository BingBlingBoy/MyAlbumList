import { useEffect, useState } from "react"

const useFetch = (url, parameters) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url,parameters)
                if (!response.ok) {
                    throw new Error("Couldn't fetch the data from the url")
                }
                const data = response.json() 
                setData(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(true);
            }
        }

        fetchData();
    }, [url])

    return { data, loading, error}
}
export default useFetch
