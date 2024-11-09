import { useEffect, useState } from "react";

const useFetch = (url) => {
  // Task 1: complete this custom hook

  // step1: create 3 states: data, isLoading, error
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // step2: fetch data & handle error
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const apiData = await response.json();
      setData(apiData);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  // step3: return 3 states
  return { data, isLoading, error };
};

export default useFetch;
