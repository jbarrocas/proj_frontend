import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../assets/Finsweet-Logo.png';

import '../styles/components/Footer.scss';

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    const regex = /[a-zA-Z0-9.!#$&'*/=?^_`%+-{|}~]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}(.[a-zA-Z{2,8}])?/g;
    if(regex.test(email)) {
      setMessage('Subscription succeed.');
      setEmail('');
    }
    else {
      setMessage('Please, insert a valid e-mail adress.');
    }
  };

  return (
    <footer className='footer'>
      <div className='footer-navbar' id='footer'>
        <Link to='/'><img className='logo' src={Logo} alt='Logo'></img></Link>
        <ul className='footer-menu'>
          <Link to='/'>
            <li className={splitLocation[1] === '' ? 'menu-item active' : 'menu-item'}>Home
            </li>
          </Link>
          <Link to='/blog'>
            <li className={splitLocation[1] === 'blog' ? 'menu-item active' : 'menu-item'}>Blog
            </li>
          </Link>
          <Link to='/about'>
            <li className={splitLocation[1] === 'about' ? 'menu-item active' : 'menu-item'}>About Us
            </li>
          </Link>
          <Link to='/contact'>
            <li className={splitLocation[1] === 'contact' ? 'menu-item active' : 'menu-item'}>Contact us
            </li>
          </Link>
          <Link to='/privacy'>
            <li className={splitLocation[1] === 'privacy' ? 'menu-item active' : 'menu-item'}>Privacy Policy
            </li>
          </Link>
        </ul>
      </div>
      <div className='subscribe-section'>
        <h2 className='subscribe-heading'>Subscribe to our newsletter to get latest updates and news</h2>
        <div className='subscribe-input'>
          <input className='mail-input' type='mail' placeholder='Enter Your Email' value={email} onChange={handleEmail}></input>
          <div className='yellow-button' onClick={validateEmail}>Subscribe
          </div>
          <div className='email-messages'>
            <p className={message === 'Subscription succeed.' ? 'success-message' : 'error-message'}>{message}</p>
          </div>
        </div>
      </div>
      <div className='address-social'>
        <address className='address'>
          <p>Finstreet 118 2561 Fintown</p>
          <p>Hello@finsweet.com  020 7993 2905</p>
        </address>
        <div className='social-media'>
          <Link to='https://facebook.com/' target='blank'><img className='facebook-icon' src='../assets/social_media_icons/Facebook.svg' alt='Facebook Icon'></img></Link>
          <Link to='https://twitter.com/' target='blank'><img className='twitter-icon' src='../assets/social_media_icons/Twitter.svg' alt='Twitter Icon'></img></Link>
          <Link to='https://instagram.com/' target='blank'><img className='instagram-icon' src='../assets/social_media_icons/Instagram.svg' alt='Instagram Icon'></img></Link>
          <Link to='https://linkedin.com/' target='blank'><img className='linkedin-icon' src='../assets/social_media_icons/Linkedin.svg' alt='LinkedIn Icon'></img></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;