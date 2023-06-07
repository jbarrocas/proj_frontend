import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/AllPosts.scss';

const AllPosts = ({ data }) => {
    const [posts, setPosts] = useState(4);

    function nextPage() {
      if( posts < data.length - 1 ){
          setPosts(posts + 5);
      }
      else {
          return;
      }
    }

    function prevPage() {
      if( posts > 4 ){
          setPosts(posts - 5);
      }
      else {
          return;
      }
    }  

  return (
      <div id='allPosts' className='all-posts-blog'>
        <h1 className='section-title'>All Posts</h1>
        <hr className='horizontal-line' />
        <div className='posts'>
          {data.map((item, id)=>{
            const linkTo = `/blogpost/${id}`;
            return (              
              <div key={id} className={ posts === id || posts === id + 1 || posts === id + 2 || posts === id + 3 || posts === id + 4 ? 'all-posts-post-wrapper' : 'all-posts-post-wrapper hidden'}>
                  <Link to={linkTo}>
                  <div className='link-wrapper'>
                    <img className='image' src={item.urlFh} alt={item.alt}></img>
                    <div className='text-wrapper'>
                        <p className='label'>{item.tag}</p>
                        <h4 className='title'>{item.title}</h4>
                        <p className='text'>{item.text}</p>
                    </div>
                  </div>
                  </Link>
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