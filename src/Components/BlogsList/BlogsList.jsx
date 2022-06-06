import React from 'react'

const BlogsList = (props) => {

    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;
    // console.log(props, blogs);


  return (
    <div className="blog-list">  
    <h2>{ title }</h2>
    {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
            <h2> { blog.title }</h2>
            <p> Written By { blog.author }</p>

            <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
    ))}
    </div>
  );
}

export default BlogsList