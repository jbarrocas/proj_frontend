import React from 'react';
import { Link } from 'react-router-dom';

import './FeaturedPostSection.scss';

const FeaturedPostSection = ({ data }) => {

  const featuredPost = data.length - 1;
  

  return (
    <div className='posts-section'>
      <div className='feature-post'>
        {data.map((item, id) => {
          return (
            <>
              <h2 className={ featuredPost === id ? 'fp-tag' : 'fp-tag hidden' }>Featured Post</h2>
              <div className='fp-wrapper'>
                <img className={ featuredPost === id ? 'image' : 'image hidden' } src={item.url} alt={item.alt}></img>
                <p className={ featuredPost === id ? 'fp-author-date' : 'fp-author-date hidden' } >By <span>{item.author}</span> | {item.date}</p>
                <h3 className={ featuredPost === id ? 'title' : 'title hidden' }>{item.title}</h3>
                <p className={ featuredPost === id ? 'text' : 'text hidden' }>{item.text}</p>
                <div className={ featuredPost === id ? 'yellow-button' : 'yellow-button hidden' }>
                  <Link to='/#'>Read More &#62;</Link>
                </div>  
              </div>
            </>
          )
        })}

      </div>
      <div className='all-posts-section'>
        <div className='all-posts-header'>
          <h2 className='ap-tag'>All Posts</h2>
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