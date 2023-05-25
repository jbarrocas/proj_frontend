import React, { useState } from 'react';

import './CategoriesCarousel.scss';


const CategoriesCarousel = ({ data }) => {
    const [card, setCard] = useState(3);

    function nextCard() {
        if(card === data.length - 1){
          return;
        }
        else{
          setCard(card + 1);
        }
      };
    
      function previousCard() {
        if(card === 3){
          return;
        }
        else{
          setCard(card - 1);      
        }
      };

    return (
      <div className='carousel-container'>
        <h2 className='carousel-title' >Choose A Category</h2>
        <div className='categories-carousel'>
            {data.map((item, id) => {
                return (
                  <div key={id} className={ card === id || card === id + 1 || card === id + 2 || card === id + 3 ? 'card' : 'card hidden'}>
                    <img className='image' src={item.url} alt={item.alt}></img>
                    <h3 className='category' >{item.category}</h3>
                    <p className='text' >{item.text}</p>
                  </div>
                )
            })}
        </div>
        <div className='carousel-buttons'>
          <button className='button' onClick={previousCard}>&#60;</button>
          <button className='button' onClick={nextCard}>&#62;</button>
        </div>
      </div>
    )
}

export default CategoriesCarousel;