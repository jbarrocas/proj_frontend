import React from 'react';

import ImageSlider from '../components/ImageSlider';
import { postsData } from '../data/PostsData';
import Tab from '../components/Tab';
import FeaturedPostSection from '../components/FeaturedPostSection';
import AllPostsHome from '../components/AllPostsHome';
import CategoriesCarousel from '../components/CategoriesCarousel';
import { categories } from '../data/CategoriesData';
import WhyWeStarted from '../components/WhyWeStarted';
import ListOfAuthors from '../components/ListOfAuthors';
import { authors } from '../data/Authors';
import FeaturedIn from '../components/FeaturedIn';
import Testimonials from '../components/Testimonials';
import { testimonials } from '../data/Testimonials';
import JoinOurTeam from '../components/JoinOurTeam';

import '../styles/pages/Home.scss';

function Home() {
  return (
    <div>
      <ImageSlider data={postsData}></ImageSlider>
      <div className='featured-post-section'>
        <FeaturedPostSection data={postsData}></FeaturedPostSection>
        <AllPostsHome data={postsData}></AllPostsHome>
      </div>
      <Tab></Tab>
      <CategoriesCarousel data={categories}></CategoriesCarousel>
      <WhyWeStarted></WhyWeStarted>
      <ListOfAuthors data={authors}></ListOfAuthors>
      <FeaturedIn></FeaturedIn>
      <Testimonials data={testimonials}></Testimonials>
      <JoinOurTeam></JoinOurTeam>
    </div>
  )
}

export default Home;