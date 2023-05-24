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
                    <button className='menu-close-btn' onClick={()=>{
                    setIsMenuExpanded(!isMenuExpanded)
                    }}>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </button>
                </ul>
                <button className='menu-btn' onClick={()=>{
                    setIsMenuExpanded(!isMenuExpanded)
                }}>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
                </svg>
                </button>
            </nav>
        </header>
    )
}

export default Header;