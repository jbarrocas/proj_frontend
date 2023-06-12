import React, { useState } from 'react';

import '../styles/components/CategoriesCarousel.scss';


const CategoriesCarousel = ({ data }) => {
    const [ ,setCard] = useState(data);

      function nextCard() {
        data.push(data.shift());
        setCard([data]);
      };
    
      function previouscard() {
        data.unshift(data.pop());
        setCard([data]);
      };

    return (
      <div className='carousel-container'>
        <div className='categories-carousel'>
            {data.map((item, index) => {
                return (
                  <div key={index} className={ index === 0 || index === 1 || index === 2 || index === 3 ? 'card' : 'card hidden'}>
                    <img className='image' src={item.url} alt={item.alt}></img>
                    <h3 className='category' >{item.category}</h3>
                    <p className='text' >{item.text}</p>
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
      </div>
    )
}

export default CategoriesCarousel;