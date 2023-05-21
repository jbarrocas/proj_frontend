import React from 'react';

import Button from './Button';

import './/FeaturedPostSection.scss';

const FeaturedPostSection = ({ data }) => {

  return (
    <div className='posts-section'>
      <div className='feature-post'>
        <h2 className='tag'>Featured Post</h2>
        <div className='container'>
          <img className="image" src='../images/white-concrete-building-1838640.png' alt='White Concrete Building'></img>
          <p className="author-date">By <span>John Doe</span> | May 23, 2022</p>
          <h3 className='title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
          <p className='text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <Button className="yellow-button" text="Read More >"></Button>
        </div>
      </div>
      <div className='all-posts-section'>
        <div className='all-posts-header'>
          <h2 className='tag'>All Posts</h2>
          <p className='view-all-btn'>View All</p>
        </div>
        <div className='scroll-section'>
          {data.map((item, id)=>{
            return (
              <div className='post-wrapper'>
                <p className='author-date'>By <span>{item.author}</span> | {item.date}</p>
                <h4 className='title'>{item.title}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FeaturedPostSection;