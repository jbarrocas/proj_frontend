import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../assets/Finsweet-Logo.png';

import '../styles/components/Header.scss';

function Header() {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split('/');

    return(
        <header className='header'>
            <nav className='navbar'>
                <Link to='/'><img className='logo' src={Logo} alt='Logo'></img></Link>
                <ul className={
                isMenuExpanded ? 'expanded-menu menu' : 'menu'
                }>
                    <Link to='/'>
                        <li className={splitLocation[1] === '' ? 'menu-item active' : 'menu-item'} onClick={()=>{
                        setIsMenuExpanded(!isMenuExpanded)
                        }}>Home</li>
                    </Link>
                    <Link to='/blog'>
                        <li className={splitLocation[1] === 'blog' ? 'menu-item active' : 'menu-item'} onClick={()=>{
                        setIsMenuExpanded(!isMenuExpanded)
                        }}>Blog</li>
                    </Link>
                    <Link to='/about'>
                        <li className={splitLocation[1] === 'about' ? 'menu-item active' : 'menu-item'} onClick={()=>{
                        setIsMenuExpanded(!isMenuExpanded)
                        }}>About Us</li>
                    </Link>
                    <Link to='/contact'>
                        <li className={splitLocation[1] === 'contact' ? 'menu-item active' : 'menu-item'} onClick={()=>{
                        setIsMenuExpanded(!isMenuExpanded)
                        }}>Contact Us</li>
                    </Link>
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