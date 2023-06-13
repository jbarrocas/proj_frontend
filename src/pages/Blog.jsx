import React from "react";

import ScrollToTop from '../components/ScrollToTop';
import FeaturedPostBlog from "../components/FeaturedPostBlog";
import { postsData } from '../data/PostsData';
import AllPosts from "../components/AllPosts";
import SectionTitle from "../components/SectionTitle";
import CategoriesCarousel from '../components/CategoriesCarousel';
import CategoriesCarouselMobile from "../components/CategoriesCarouselMobile";
import { categories } from '../data/CategoriesData';
import JoinOurTeam from '../components/JoinOurTeam';

const Blog = () => {
    return(
        <div>
            <ScrollToTop></ScrollToTop>
            <FeaturedPostBlog data={ postsData }></FeaturedPostBlog>
            <AllPosts data={ postsData }></AllPosts>
            <SectionTitle className='section-title-left' title='All Categories'></SectionTitle>
            <CategoriesCarousel data={ categories } postsData={ postsData }></CategoriesCarousel>
            <CategoriesCarouselMobile data={ categories } postsData={ postsData }></CategoriesCarouselMobile>
            <JoinOurTeam></JoinOurTeam>
        </div>
    )
}

export default Blog;