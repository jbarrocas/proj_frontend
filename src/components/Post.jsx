import React from 'react';

const Post = ({ data }) => {
  return (
    <div>
        <h1>{data.title}</h1>
        <p>{data.text}</p>
    </div>
  )
}

export default Post;