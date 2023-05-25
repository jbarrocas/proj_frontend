import React from 'react';




const BlogPost = (props) => {

  return (
    <div>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.alt} />
        <p>{props.text}</p>
    </div>
  )
}

export default BlogPost;

