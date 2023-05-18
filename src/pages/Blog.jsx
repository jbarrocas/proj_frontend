import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Blog() {
    return(
        <div>
                    <h1>Blog</h1>
                    <Link to="/about"><Button text="Read More >"/></Link>

        </div>

    )
}

export default Blog;