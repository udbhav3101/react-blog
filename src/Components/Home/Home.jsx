import React from 'react';
import { useState, useEffect } from 'react';  
import BlogsList from '../BlogsList/BlogsList';
import './Home.css';


const Home = () => {

    const [blogs, setBlogs] = useState(null);
    
    const [loading, setLoading] = useState(true);
    
    const [errorMessage, setErrorMessage] = useState(null);

      useEffect(() => {
        fetch('http://localhost:8000/blogss')
          .then(res =>{
            // console.log(res);

            if(!res.ok){
              throw Error('Could not fetch data for the response')
            }
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            setLoading(false);
            setErrorMessage(null);
          })
          .catch(err => {
            setLoading(false);
            setErrorMessage(err.message);
          })
      },[]);
    
  return (
    <div className="home"> 
      {errorMessage && <div> { errorMessage } </div>}
      { loading && <div> Loading....🤔 </div>}
      {blogs && <BlogsList blogs={blogs} title="All Blogs!!😊" />}
    </div>
  );
}

export default Home