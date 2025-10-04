import { useState, useEffect } from "react";

// Custom hook for fetching data from a given URL
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to hold any errors

  useEffect(() => {
    if (!url) return;
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
        return response.json();
    })
    .then((data) => {
        setData(data);
        setLoading(false);
    })
    .catch((err) => {
        setError(err); 
        setLoading(false);
    });
    }, [url]);

    return { data, loading, error };
}
