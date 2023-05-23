import React from 'react';

import ImageSlider from '../components/ImageSlider';
import { sliderData } from '../data/SliderData';
import Tab from '../components/Tab';
import FeaturedPostSection from '../components/FeaturedPostSection';
import CategoriesCarousel from '../components/CategoriesCarousel';
import { categories } from '../data/CategoriesData';
import WhyWeStarted from '../components/WhyWeStarted';
import ListOfAuthors from '../components/ListOfAuthors';
import FeaturedIn from '../components/FeaturedIn';

function Home() {
  return (
    <div>
      <div className='image-slider'>
        <ImageSlider data={sliderData}></ImageSlider>
        <FeaturedPostSection data={sliderData}></FeaturedPostSection>
        <Tab></Tab>
        <CategoriesCarousel data={categories}></CategoriesCarousel>
        <WhyWeStarted></WhyWeStarted>
        <ListOfAuthors></ListOfAuthors>
        <FeaturedIn></FeaturedIn>
      </div>
    </div>
  )
}

export default Home;