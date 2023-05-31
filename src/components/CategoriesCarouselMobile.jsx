import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

import '../styles/components/CategoriesCarouselMobile.scss';


const CategoriesCarouselMobile = ({ data }) => {
    const [card, setCard] = useState(1);

    function nextCard() {
        if(card === data.length - 1){
          return;
        }
        else{
          setCard(card + 1);
        }
      };
    
      function previousCard() {
        if(card === 1){
          return;
        }
        else{
          setCard(card - 1);      
        }
      };

    return (
      <div className='carousel-container-mobile'>
        <SectionTitle title='Choose A Category'></SectionTitle>
        <div className='categories-carousel-mobile'>
            {data.map((item, id) => {
                return (
                  <div key={id} className={ card === id ? 'card' : 'card hidden'}>
                    <img className='image' src={item.url} alt={item.alt}></img>
                    <h3 className='category' >{item.category}</h3>
                    <p className='text' >{item.text}</p>
                  </div>
                )
            })}
        </div>
        <div className='carousel-buttons'>
          <div className='button' onClick={previousCard}>
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

export default CategoriesCarouselMobile;