import React from 'react';
import { useState, useEffect } from 'react';  
import useFetch from '../../useFetch';
import BlogsList from '../BlogsList/BlogsList';
import './Home.css';




const Home = () => {

  const {data: blogs, loading, errorMessage} = useFetch('http://localhost:8000/blogs')
      
    
  return (
    <div className="home"> 
      {errorMessage && <div> { errorMessage } </div>}
      { loading && <div> Loading....🤔 </div>}
      {blogs && <BlogsList blogs={blogs} title="All Blogs!!😊" />}
    </div>
  );
}

export default Home