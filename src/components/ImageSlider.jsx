import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      {data.map((item, id) => {
        return (
          <div className='slider-wrapper'>
            <div className='image-wrapper'>
              <img src={item.urlOverlay} alt={item.alt} key={id} className={ image === id ? 'overlay' : 'overlay hidden' }></img>
              <img src={item.url} alt={item.alt} key={id} className={ image === id ? 'slider-image' : 'slider-image hidden' }></img>            
            </div>
            <div className='text-wrapper'>
              <p className={ image === id ? 'tag' : 'tag hidden' }>Posted on <strong>{item.tag}</strong></p>
              <h1 className={ image === id ? 'title' : 'title hidden' }>{item.title}</h1>
              <div className='author-date'>
                <p className={ image === id ? 'author' : 'author hidden' }>By <span>{item.author}</span> | {item.date}</p>
              </div>              
              <p className={ image === id ? 'text' : 'text hidden' }>{item.text}</p>
              <div className={ image === id ? 'yellow-button' : 'yellow-button hidden' } text='Read More >'>
                <Link to='/#'>Read More &#62;</Link>
              </div>              
            </div> 
          </div>
        )
      })}
      <div className='controls-wrapper'>
        <button className='slide-btn previous-slide-btn' onClick={previousImage}>&#60;</button>
        <div className='slider-indicators'>
          {data.map((item, id)=>{
            return (
              <button className={ image === id ? 'indicator' : 'indicator inactive-indicator'} key={id} onClick={()=> setImage(id)}></button>
            )
          })}
        </div>
        <button className='slide-btn next-slide-btn' onClick={nextImage}>&#62;</button>
      </div>
    </div>
  )
}

export default ImageSlider;