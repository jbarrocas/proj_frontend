import React from 'react';
import { useState } from 'react';

import Button from './Button';

import './ImageSlider.scss';

const ImageSlider = ({ data }) => {
  const [image, setImage] = useState(0);

  function nextImage() {
    if(image === data.length - 1){
      setImage(0);
    }
    else{
      setImage(image + 1);
    }
  };

  function previousImage() {
    if(image === 0){
      setImage(data.length - 1);
    }
    else{
      setImage(image - 1);      
    }
  };

  return (
    <div className='slider'>
      {data.map((item, id)=>{
        return (
          <div className='slider-wrapper'>
            <img src={item.url} alt={item.alt} key={id} className={ image === id ? "slider-image" : "slider-image hidden" }></img>
            <div className='text-wrapper'>
              <p className={ image === id ? "image-tag" : "image-tag hidden" }>Posted on <strong>{item.tag}</strong></p>
              <h1 className={ image === id ? "image-title" : "image-title hidden" }>{item.title}</h1>
              <div className='author-date-wrapper'>
                <p className={ image === id ? "image-author" : "image-author hidden" }>By</p>
                <p className={ image === id ? "image-author highlight" : "image-author highlight hidden" }> {item.author}</p>
                <p className={ image === id ? "image-date" : "image-date hidden" }>| {item.date}</p>
              </div>              
              <p className={ image === id ? "image-text" : "image-text hidden" }>{item.text}</p>
              <Button className={ image === id ? "yellow-button" : "yellow-button hidden" } text="Read More >" />
            </div> 
          </div>
        )
      })}
      <div className='controls-wrapper'>
        <button className='slide-btn previous-slide-btn' onClick={previousImage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className='slider-indicators'>
          {data.map((item, id)=>{
            return (
              <button className={ image === id ? "indicator" : "indicator inactive-indicator"} key={id} onClick={()=> setImage(id)}></button>
            )
          })}
        </div>
        <button className='slide-btn next-slide-btn' onClick={nextImage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ImageSlider;