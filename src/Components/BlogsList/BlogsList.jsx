import React from 'react'

const BlogsList = (props) => {

    const blogs = props.blogs;
    console.log(props, blogs);


  return (
    <div className="blog-list">  
    {blogs.map((blog) => (
        <div className="blog-preview" key={blogs.id}>
            <h2> { blog.title }</h2>
            <p> Written By { blog.author }</p>
        </div>
    ))}
    </div>
  );
}

export default BlogsList