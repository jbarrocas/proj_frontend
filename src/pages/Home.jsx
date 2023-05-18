import React from 'react'
import ImageSlider from '../components/ImageSlider';

import { SliderData } from '../data/sliderData';



function Home() {
  return (
    <div>
      <div className='image-slider'>
        <ImageSlider data={SliderData}></ImageSlider>
      </div>
    </div>
  )
}

export default Home;