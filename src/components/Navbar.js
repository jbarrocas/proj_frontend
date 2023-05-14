import React from "react";
import { Link } from "react-router-dom"
import Button from "./Button";

import "./Navbar.scss";

function Navbar() {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact us</Link>
                    </li>
                    <li>
                        <Button text="Subscribe"/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;