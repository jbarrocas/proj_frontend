import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/WhyWeStarted.scss';

function WhyWeStarted() {
  return (
    <div className='why-section'>
        <div className='section-wrapper'>
            <img className='image' src='./images/why-we-started.png' alt='Group of people'></img>
            <div className='text-wrapper'>
                <p className='tag'>Why we started</p>
                <h1 className='title'>It started out as a simple idea and evolved into our passion</h1>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <div className='button'><Link to='/#'>Discover our story &#62;</Link></div>
            </div>
        </div>

    </div>
  )
}

export default WhyWeStarted;