import React from 'react'
import './Create.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState(''); 
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        // console.log(blog);
        setLoading(true);
        fetch('https://reactblog-uv.herokuapp.com/blogs/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog added');
            setLoading(false);
            navigate('/');
        })
    };

  return (
    <div className="create">
        <h2>Add a new Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title: </label>
            <input
            type="text"
            required
            value={title}
            onChange = { (e) => setTitle(e.target.value) }  
            />
            <label>Blog Body: </label>
            <textarea
            required
            value={body}
            onChange = { (e) => setBody(e.target.value) }
            />
            <label>Blog Author: </label>
            <input
            type="text"
            required
            value={author}
            onChange = { (e) => setAuthor(e.target.value) }
            />
            {!loading && <button>Add blog</button>}
            {loading && <button>Adding Blog... 🚀🚀</button>}
            {/* <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p> */}
        </form>
    </div>
  )
}

export default Create