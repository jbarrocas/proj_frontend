import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

import Logo from '../assets/Finsweet-Logo.png';
import FacebookIcon from '../assets/social_media_icons/Facebook.svg';
import TwitterIcon from '../assets/social_media_icons/Twitter.svg';
import InstagramIcon from '../assets/social_media_icons/Instagram.svg';
import LinkedinIcon from '../assets/social_media_icons/LinkedIn.svg';

import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className='footer-navbar' id='footer'>
        <Link to='/'><img className='logo' src={Logo} alt='Logo'></img></Link>
        <ul className='footer-menu'>
          <li className='menu-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='menu-item'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='menu-item'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='menu-item'>
            <Link to='/contact'>Contact us</Link>
          </li>
          <li className='menu-item'>
            <Link to='/privacy'>Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className='subscribe-section'>
        <h2 className='subscribe-heading'>Subscribe to our newsletter to get latest updates and news</h2>
        <div className='subscribe-input'>
          <input className='mail-input' type='mail' placeholder='Enter Your Email'></input>
          <Button className='yellow-button' text='Subscribe' />
        </div>
      </div>
      <div className='address-social'>
        <address className='address'>
          <p>Finstreet 118 2561 Fintown</p>
          <p>Hello@finsweet.com  020 7993 2905</p>
        </address>
        <div className='social-media'>
          <Link to='#'><img className='facebook-icon' src={FacebookIcon} alt='Facebook Icon'></img></Link>
          <Link to='#'><img className='twitter-icon' src={TwitterIcon} alt='Twitter Icon'></img></Link>
          <Link to='#'><img className='instagram-icon' src={InstagramIcon} alt='Instagram Icon'></img></Link>
          <Link to='#'><img className='linkedin-icon' src={LinkedinIcon} alt='LinkedIn Icon'></img></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;