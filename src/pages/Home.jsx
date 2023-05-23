import React from 'react';

import ImageSlider from '../components/ImageSlider';
import { sliderData } from '../data/SliderData';
import Tab from '../components/Tab';
import FeaturedPostSection from '../components/FeaturedPostSection';
import CategoriesCarousel from '../components/CategoriesCarousel';
import { categories } from '../data/CategoriesData';

function Home() {
  return (
    <div>
      <div className='image-slider'>
        <ImageSlider data={sliderData}></ImageSlider>
        <FeaturedPostSection data={sliderData}></FeaturedPostSection>
        <Tab></Tab>
        <CategoriesCarousel data={categories}></CategoriesCarousel>
      </div>
    </div>
  )
}

export default Home;