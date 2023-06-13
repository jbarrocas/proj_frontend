import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/AllPostsHome.scss';

const AllPostsHome = ({ data }) => {

  return (
    <div className='all-posts-home'>
    <div className='heading-wrapper'>
      <h2 className='heading'>All Posts</h2>
      <Link to='/blog'>
        <p className='view-all-button'>View All</p>
      </Link>
    </div>
    <div className='scroll-section'>
      {data.map((item, id)=>{
        const linkTo = `/blogpost/${id}`;
        return (
          <div key={id} className='post-card-container'>
            <Link to={linkTo}>
              <div className='post-card'>
                <p className='author-date'>By <span>{item.author}</span>&nbsp; | &nbsp;{item.date}</p>
                <h4 className='title'>{item.title}</h4>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default AllPostsHome;