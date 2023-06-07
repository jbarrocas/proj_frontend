import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/ReadNext.scss';

const ReadNext = ({ data }) => {  

  let min = 2;
  let max = data.length;
  let random = Math.random() * (max - min) + min;
  let randomInt = parseInt(random, 10);

  const [post] = useState(randomInt);

  return (
    <div className='read-next-wrapper'>
      <h2 className='read-title'>What to read next</h2>
      <div className='read-posts'>
        {data.map((item, id) => {
          const linkTo = `/blogpost/${id}`;
          return (
            <div key={id} className={ post === id || post === id + 1 || post === id + 2 ? 'read-post-card' : 'read-post-card hidden'}>
              <Link to={linkTo}>
              <img className='read-post-image' src={item.urlFh} alt={item.alt} />
              <p className='read-post-date'>By <span>{item.author}</span>&nbsp; | &nbsp;{item.date}</p>
              <h3 className='read-post-title'>{item.title}</h3>
              <p className='read-post-text'>{item.text}</p>
              </Link>
            </div>
          )
        })}
      </div>
      <hr className='horizontal-line' />
  </div>
  )
}

export default ReadNext;