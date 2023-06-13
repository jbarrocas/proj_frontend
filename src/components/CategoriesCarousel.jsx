import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/CategoriesCarousel.scss';


const CategoriesCarousel = ({ data, postsData }) => {
    const [ ,setCard] = useState(data);
    const [posts, setPosts] = useState('');

      function nextCard() {
        data.push(data.shift());
        setCard([data]);
      };
    
      function previouscard() {
        data.unshift(data.pop());
        setCard([data]);
      };

      const handleClick = (eventArgs) => {
        let categoryString = eventArgs.target.className;
        const category = categoryString.split(' ')[1];
        setPosts(category);
      };

    return (
      <div className='carousel-container'>
        <div className='categories-carousel'>
            {data.map((item, index) => {
                return (
                  <div key={index} onClick={handleClick} className={ index === 0 || index === 1 || index === 2 || index === 3 ? `card ${item.category}` : `card ${item.category} hidden`}>
                    <img className={`image ${item.category}`} src={item.url} alt={item.alt}></img>
                    <h3 className={`category ${item.category}`} >{item.category}</h3>
                    <p className={`text ${item.category}`} >{item.text}</p>
                  </div>
                )
            })}
        </div>
        <div className='carousel-buttons'>
          <div className='button' onClick={previouscard}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className='button' onClick={nextCard}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className='posts'>
          {postsData.map((item, id) => {
            const linkTo = `/blogpost/${id}`;
            return (
              <div key={id} className={ item.tag === posts ? 'post-wrapper' : 'post-wrapper hidden'}>
                <Link to={linkTo}>
                  <img className='image' src={item.url} alt={item.alt}></img>
                  <div className='text-wrapper'>
                    <p className='label'>{item.tag}</p>
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

export default CategoriesCarousel;