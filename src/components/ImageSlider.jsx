import React from 'react';
import { useState } from 'react';

import './ImageSlider.scss';

const ImageSlider = ({ data }) => {
  const [image, setImage] = useState(0);

  function nextImage() {
    if(image === data.length - 1){
      setImage(0);
    }
    else{
      setImage(image + 1);
    };
  };

  function previousImage() {
    if(image === 0){
      setImage(data.length - 1);
    }
    else{
      setImage(image - 1);      
    }
  };

  console.log(data);

  return (
    <div className='slider'>
      {data.map((slide, id)=>{
        return (
          <img src={slide.url} alt={slide.alt} key={id} className={ image === id ? "slider-image" : "slider-image hidden-image" }></img>
        )
      })}
      <button className='slide-btn previous-slide-btn' onClick={previousImage}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button className='slide-btn next-slide-btn' onClick={nextImage}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <div className='slider-indicators'>
        {data.map((slide, id)=>{
          return (
            <button className={ image === id ? "indicator" : "indicator inactive-indicator"} key={id} onClick={()=> setImage(id)}></button>
          )
        })}
      </div>
    </div>
  )
}

export default ImageSlider;