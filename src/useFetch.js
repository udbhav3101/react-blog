import { useState, useEffect } from 'react';

const useFetch = url => {
  const abortCont = new AbortController();

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          console.log(res);

          if (!res.ok) {
            throw Error('Could not fetch data for the response');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setLoading(false);
          setErrorMessage(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log(err);
          }
          setLoading(false);
          setErrorMessage(err.message);
        });
    }, 1000);

    return () => abortCont.abort();
  },);

  return { data, loading, errorMessage };
};

export default useFetch;
