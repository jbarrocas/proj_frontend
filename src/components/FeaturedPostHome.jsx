import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/FeaturedPostHome.scss';

const FeaturedPostSection = ({ data }) => {

  const featuredPost = data.length - 1;  

  return (
    <div className='featured-home-container'>
      <h2 className='heading'>Featured Post</h2>

      {data.map((item, id) => {
        const linkTo = `/blogpost/${id}`;

        return (
          <div key={id} className={ featuredPost === id ? 'featured-post-wrapper' : 'featured-post-wrapper hidden'}>
              <img className='post-image' src={item.urlFh} alt={item.alt}></img>
              <p className='author-date'>By <span>{item.author}</span> &nbsp; | &nbsp; {item.date}</p>
              <h3 className='title'>{item.title}</h3>
              <p className='text'>{item.text}</p>
              <Link to={linkTo}><div className='button'>Read More &#62;</div></Link>
          </div>
        )
      })}
    </div>
  )
}

export default FeaturedPostSection;