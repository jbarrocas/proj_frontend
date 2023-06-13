import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 3500);

    return() => {
      clearInterval(timer);
    };
  });

  return (
    <div className='slider'>
      {data.map((item, id) => {
        const linkTo = `/blogpost/${id}`;
        return (
          <div key={id} className='sliders-container'>
            <div className={ image === id ? 'slide-wrapper' : 'slide-wrapper hidden'}>
              <div className='image-wrapper'>
                <img className='overlay' src={item.urlOverlay} alt={item.alt}></img>
                <img className='image' src={item.url} alt={item.alt}></img>            
              </div>
              <div className='text-wrapper'>
                <p className='tag'>Posted on <strong>{item.tag}</strong></p>
                <h1 className='title'>{item.title}</h1>
                <p className='author-date'>By <span>{item.author}</span> | {item.date}</p>              
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
            <div className='slide-btn previous-slide-btn' onClick={previousImage}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div className='slide-indicators'>
              {data.map((item, id)=>{
                return (
                  <div key={id} className={ image === id ? 'indicator' : 'indicator inactive-indicator'} onClick={()=> setImage(id)}></div>
                )
              })}
            </div>
            <div className='slide-btn next-slide-btn' onClick={nextImage}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
    </div>
  )
}

export default ImageSlider;