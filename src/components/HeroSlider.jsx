import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/HeroSlider.scss';

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
      {data.map((item, id) => {
        const linkTo = `/blogpost/${id}`;
        return (
          <div key={id} className='sliders-container'>
            <div className={ image === id ? 'slider-wrapper' : 'slider-wrapper hidden'}>
              <div className='image-wrapper'>
                <img className='overlay' src={item.urlOverlay} alt={item.alt}></img>
                <img className='slider-image' src={item.url} alt={item.alt}></img>            
              </div>
              <div className='text-wrapper'>
                <p className='tag'>Posted on <strong>{item.tag}</strong></p>
                <h1 className='title'>{item.title}</h1>
                <div className='author-date'>
                  <p className='author'>By <span>{item.author}</span> | {item.date}</p>
                </div>              
                <p className='text'>{item.text}</p>
                <Link to={linkTo}>
                  <div className='button'>Read More &#62;</div>
                </Link>        
              </div> 
            </div>
          </div>
        )
      })}
          <div className='controls-wrapper'>
            <div className='slide-btn previous-slide-btn' onClick={previousImage}>&#60;</div>
            <div className='slider-indicators'>
              {data.map((item, id)=>{
                return (
                  <div key={id} className={ image === id ? 'indicator' : 'indicator inactive-indicator'} onClick={()=> setImage(id)}></div>
                )
              })}
            </div>
            <div className='slide-btn next-slide-btn' onClick={nextImage}>&#62;</div>
          </div>
    </div>
  )
}

export default ImageSlider;