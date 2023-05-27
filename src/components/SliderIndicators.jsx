import React, {useState} from 'react';

import './SliderIndicators.scss';

const SliderIndicators = ({data}) => {
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
  )
}

export default SliderIndicators;