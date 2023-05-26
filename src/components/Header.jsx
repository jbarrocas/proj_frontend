import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/Finsweet-Logo.png';

import './Header.scss';

function Header() {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    return(
        <header>
            <nav className='navbar'>
                <Link to='/'><img className='logo' src={Logo} alt='Logo'></img></Link>
                <ul className={
                isMenuExpanded ? 'menu-expanded menu' : 'menu'
                }>
                    <li className='menu-item' onClick={()=>{
                    setIsMenuExpanded(!isMenuExpanded)
                    }}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='menu-item' onClick={()=>{
                    setIsMenuExpanded(!isMenuExpanded)
                    }}>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li className='menu-item' onClick={()=>{
                    setIsMenuExpanded(!isMenuExpanded)
                    }}>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className='menu-item' onClick={()=>{
                    setIsMenuExpanded(!isMenuExpanded)
                    }}>
                        <Link to='/contact'>Contact us</Link>
                    </li>
                    <li className='menu-item'>
                        <div className='subscribe-button'>
                            <a href='#footer'>Subscribe</a>
                        </div>
                    </li>
                </ul>
                <div className={ !isMenuExpanded ? 'menu-btn menu-open-btn' : 'menu-btn menu-open-btn hidden'} onClick={()=>{
                    setIsMenuExpanded(!isMenuExpanded)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className={ isMenuExpanded ? 'menu-btn menu-close-btn' : 'menu-btn menu-close-btn hidden'} onClick={()=>{
                    setIsMenuExpanded(!isMenuExpanded)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </nav>
        </header>
    )
}

export default Header;