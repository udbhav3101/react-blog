import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../useFetch';
import './BlogDetails.css';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    errorMessage,
    loading,
  } = useFetch(`${process.env.REACT_APP_API_URL}/blogs/` + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch(`${process.env.REACT_APP_API_URL}/blogs/` + blog.id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="blog-details">
      {errorMessage && <div> {errorMessage} </div>}
      {loading && <div> Loading....🤔 </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p> Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
