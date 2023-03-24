import React from 'react';
import useFetch from '../../useFetch';
import BlogsList from '../BlogsList/BlogsList';
import './Home.css';

const Home = () => {
  const {
    data: blogs,
    loading,
    errorMessage,
  } = useFetch(`${process.env.REACT_APP_API_URL}/blogs`);
  console.log(process.env)
  return (
    <div className="home">
      {errorMessage && <div> {errorMessage} </div>}
      {loading && <div> Loading....🤔 </div>}
      {blogs && <BlogsList blogs={blogs} title="All Blogs!!😊" />}
    </div>
  );
};

export default Home;
