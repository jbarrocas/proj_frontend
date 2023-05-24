import React from "react";

import FeaturedPostBlog from "../components/FeaturedPostBlog";
import { sliderData } from '../data/SliderData';

function Blog() {
    return(
        <div>
            <FeaturedPostBlog data={ sliderData}></FeaturedPostBlog>
        </div>

    )
}

export default Blog;