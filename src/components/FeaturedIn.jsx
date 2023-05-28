import React from 'react';

import '../styles/components/FeaturedIn.scss';

function FeaturedIn() {
  return (
    <div className='featured-in-section'>
        <div className='featured-in'>
            <p className='text'>We are</p>
            <h4 className='heading'>Featured in</h4>
        </div>
        <div className='logos-section'>
            <img className='logo' src='./images/featured_in/Logo 1.png' alt='logo'></img>
            <img className='logo' src='./images/featured_in/Logo 2.png' alt='logo'></img>
            <img className='logo' src='./images/featured_in/Logo 3.png' alt='logo'></img>
            <img className='logo' src='./images/featured_in/Logo 4.png' alt='logo'></img>
            <img className='logo' src='./images/featured_in/Logo 5.png' alt='logo'></img>
        </div>
    </div>
  )
}

export default FeaturedIn;