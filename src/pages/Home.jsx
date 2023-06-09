import React from 'react';

import ScrollToTop from '../components/ScrollToTop';
import HeroSlider from '../components/HeroSlider';
import HeroSliderMobile from '../components/HeroSliderMobile';
import { postsData } from '../data/PostsData';
import FeaturedPostHome from '../components/FeaturedPostHome';
import AllPostsHome from '../components/AllPostsHome';
import Tab from '../components/Tab';
import SectionTitle from '../components/SectionTitle';
import CategoriesCarousel from '../components/CategoriesCarousel';
import CategoriesCarouselMobile from '../components/CategoriesCarouselMobile';
import { categories } from '../data/CategoriesData';
import WhyWeStarted from '../components/WhyWeStarted';
import ListOfAuthors from '../components/ListOfAuthors';
import { authors } from '../data/Authors';
import FeaturedIn from '../components/FeaturedIn';
import Testimonials from '../components/Testimonials';
import { testimonials } from '../data/Testimonials';
import JoinOurTeam from '../components/JoinOurTeam';

import '../styles/pages/Home.scss';

const Home = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <HeroSlider className='hero-slider' data={postsData}></HeroSlider>
      <HeroSliderMobile className='hero-slider-mobile' data={postsData}></HeroSliderMobile>
      <div className='featured-post-section'>
        <FeaturedPostHome data={postsData}></FeaturedPostHome>
        <AllPostsHome data={postsData}></AllPostsHome>
      </div>
      <Tab></Tab>
      <SectionTitle className='section-title-center' title='Choose A Category'></SectionTitle>
      <CategoriesCarousel data={categories} postsData={postsData}></CategoriesCarousel>
      <CategoriesCarouselMobile data={categories} postsData={postsData}></CategoriesCarouselMobile>
      <WhyWeStarted></WhyWeStarted>
      <ListOfAuthors data={authors}></ListOfAuthors>
      <FeaturedIn></FeaturedIn>
      <Testimonials data={testimonials}></Testimonials>
      <JoinOurTeam></JoinOurTeam>
    </>
  )
}

export default Home;