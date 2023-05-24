import React from "react";

import FeaturedPostBlog from "../components/FeaturedPostBlog";
import { postsData } from '../data/PostsData';
import AllPosts from "../components/AllPosts";
import CategoriesCarousel from '../components/CategoriesCarousel';
import { categories } from '../data/CategoriesData';

function Blog() {
    return(
        <div>
            <FeaturedPostBlog data={ postsData}></FeaturedPostBlog>
            <AllPosts data={postsData}></AllPosts>
            <CategoriesCarousel data={ categories }></CategoriesCarousel>
        </div>
    )
}

export default Blog;