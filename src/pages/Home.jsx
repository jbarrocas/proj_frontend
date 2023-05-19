import React from 'react'
import ImageSlider from '../components/ImageSlider';

import { SliderData } from '../data/sliderData';
import Tab from '../components/Tab';




function Home() {
  return (
    <div>
      <div className='image-slider'>
        <ImageSlider data={SliderData}></ImageSlider>
        <Tab></Tab>
      </div>
    </div>
  )
}

export default Home;