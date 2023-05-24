import React, { useState } from 'react';

import './AllPosts.scss';

const AllPosts = ({ data }) => {
    const [posts, setPosts] = useState(4);

    function nextPage() {
        if( posts < data.length - 1 ){
            setPosts(posts + 5);
        }
        else {
            return
        }
    }

    function prevPage() {
        if( posts > 4 ){
            setPosts(posts - 5);
        }
        else {
            return
        }
    }

  return (
      <div className='all-posts-blog'>
        <h1 className='section-title'>All Posts</h1>
        <div className='horiz-line'></div>
        <div className='posts'>
          {data.map((item, id)=>{
            return (
              <div key={id} className={ posts === id || posts === id + 1 || posts === id + 2 || posts === id + 3 || posts === id + 4 ? 'post-wrapper' : 'post-wrapper hidden'}>
                <img className='image' src={item.url} alt={item.alt}></img>
                <div className='text-wrapper'>
                    <p className='label'>{item.tag}</p>
                    <h4 className='title'>{item.title}</h4>
                    <p className='text'>{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className='buttons'>
            <div className='button prev-button' onClick={prevPage}>&#60; Prev</div>
            <div className='button next-button' onClick={nextPage}>Next &#62;</div>
        </div>
      </div>
  )
}

export default AllPosts;