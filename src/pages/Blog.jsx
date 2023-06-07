import React from "react";

import FeaturedPostBlog from "../components/FeaturedPostBlog";
import { postsData } from '../data/PostsData';
import AllPosts from "../components/AllPosts";
import CategoriesCarousel from '../components/CategoriesCarousel';
import { categories } from '../data/CategoriesData';
import ScrollToTop from '../components/ScrollToTop';
import JoinOurTeam from '../components/JoinOurTeam';
import SectionTitle from "../components/SectionTitle";

function Blog() {
    return(
        <div>
            <ScrollToTop></ScrollToTop>
            <FeaturedPostBlog data={ postsData }></FeaturedPostBlog>
            <AllPosts data={ postsData }></AllPosts>
            <SectionTitle className='section-title-left' title='All Categories'></SectionTitle>
            <CategoriesCarousel data={ categories }></CategoriesCarousel>
            <JoinOurTeam></JoinOurTeam>
        </div>
    )
}

export default Blog;