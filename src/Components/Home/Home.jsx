import React from 'react';
import { useState, useEffect } from 'react';  
import BlogsList from '../BlogsList/BlogsList';
import './Home.css';


const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
    
    
  return (
    <div className="home">
      <BlogsList blogs={blogs}/>
    </div>
  );
}

export default Home