import React from "react";

import FeaturedPostBlog from "../components/FeaturedPostBlog";
import { postsData } from '../data/PostsData';
import AllPosts from "../components/AllPosts";
import CategoriesCarousel from '../components/CategoriesCarousel';
import { categories } from '../data/CategoriesData';
import ScrollToTop from "../components/ScrollToTop";

function Blog() {
    return(
        <div>
            <ScrollToTop></ScrollToTop>
            <FeaturedPostBlog data={ postsData}></FeaturedPostBlog>
            <AllPosts data={postsData}></AllPosts>
            <CategoriesCarousel data={ categories }></CategoriesCarousel>
        </div>
    )
}

export default Blog;