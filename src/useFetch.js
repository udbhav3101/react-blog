import {useState, useEffect} from 'react';


const useFetch = (url) => {


    const [data, setData] = useState(null);
    
    const [loading, setLoading] = useState(true);
    
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res =>{
            // console.log(res);

            if(!res.ok){
            throw Error('Could not fetch data for the response')
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
            setErrorMessage(null);
        })
        .catch(err => {
            setLoading(false);
            setErrorMessage(err.message);
        })
    },[url]);

    return {data, loading, errorMessage};

}

export default useFetch;