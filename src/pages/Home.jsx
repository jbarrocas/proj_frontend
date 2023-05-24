import React from 'react';

import ImageSlider from '../components/ImageSlider';
import { postsData } from '../data/PostsData';
import Tab from '../components/Tab';
import FeaturedPostSection from '../components/FeaturedPostSection';
import CategoriesCarousel from '../components/CategoriesCarousel';
import { categories } from '../data/CategoriesData';
import WhyWeStarted from '../components/WhyWeStarted';
import ListOfAuthors from '../components/ListOfAuthors';
import { authors } from '../data/Authors';
import FeaturedIn from '../components/FeaturedIn';
import Testimonials from '../components/Testimonials';
import { testimonials } from '../data/Testimonials';
import JoinOurTeam from '../components/JoinOurTeam';

function Home() {
  return (
    <div>
      <div className='image-slider'>
        <ImageSlider data={postsData}></ImageSlider>
        <FeaturedPostSection data={postsData}></FeaturedPostSection>
        <Tab></Tab>
        <CategoriesCarousel data={categories}></CategoriesCarousel>
        <WhyWeStarted></WhyWeStarted>
        <ListOfAuthors data={authors}></ListOfAuthors>
        <FeaturedIn></FeaturedIn>
        <Testimonials data={testimonials}></Testimonials>
        <JoinOurTeam></JoinOurTeam>
      </div>
    </div>
  )
}

export default Home;