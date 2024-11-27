import { useState, useEffect } from 'react';

function useFetch(url: string, payload: any) {
  // State to manage data, loading state, and errors
  const [data, setData] = useState<any>(null);  
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Fetching data from the provided URL
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',  // HTTP method
          headers: {
            'Content-Type': 'application/json',  // Specify that the body will be JSON
          },
          body: JSON.stringify(payload),  // Convert the data to JSON
        });  // Make the API request
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();  // Parse the response as JSON
        setData(data);  // Set the data state
      } catch (error: any) {
        setError(error);  // If there's an error, set the error state
      } finally {
        setLoading(false);  // Set loading to false once the request is complete
      }
    };

    fetchData();
  }, [url]);  // Re-run the effect when the URL changes

  return { data, loading, error };  // Return states
}

export default useFetch;
