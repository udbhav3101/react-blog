import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../useFetch';
import './BlogDetails.css';

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, errorMessage, loading } = useFetch('http://localhost:8000/blogs/'+id)
    const navigate = useNavigate();


    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method : 'DELETE'
        })
        .then( () => {
            navigate('/')
        })
        
    }
    
  return (
    <div className="blog-details">
        {errorMessage && <div> { errorMessage } </div>}
        { loading && <div> Loading....🤔 </div>}
        {blog && (
            <article>
            <h2>{ blog.title }</h2>
            <p> Written by: { blog.author }</p>
            <div>{ blog.body }</div>
            <button onClick={handleClick}>Delete Blog</button>
            </article>
        )}
    </div>
  )
}

export default BlogDetails