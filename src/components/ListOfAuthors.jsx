import React from 'react';

import './ListOfAuthors.scss';

function ListOfAuthors() {
  return (
    <div className='authors-section'>
        <h2 className='title'>List of Authors</h2>
        <div className='cards'>
            <div className='card'>
                <img className='avatar' src='./images/authors/Floyd.png' alt='Floyd Miles'></img>
                <h3 className='name'>Floyd Miles</h3>
                <p className='label'>Content Writer @Company</p>
                <div className='social-wrapper'>
                    <img className='social-icon' src='./assets/social_media_icons/Facebook.svg' alt='Facebook Icon'></img>
                    <img className='social-icon' src='./assets/social_media_icons/Twitter.svg' alt='Twitter Icon'></img>
                    <img className='social-icon' src='./assets/social_media_icons/Instagram.svg' alt='Instagram Icon'></img>
                    <img className='social-icon' src='./assets/social_media_icons/Linkedin.svg' alt='LinkedIn Icon'></img>
                </div>
            </div>
            <div className='card'>
                <img className='avatar' src='./images/authors/Dianne.png' alt='Dianne Russel'></img>
                <h3 className='name'>Dianne Russel</h3>
                <p className='label'>Content Writer @Company</p>
                <div className='social-wrapper'>
                    <img className='social-icon' src='./assets/social_media_icons/Facebook.svg' alt='Facebook Icon'></img>
                    <img className='social-icon' src='./assets/social_media_icons/Twitter.svg' alt='Twitter Icon'></img>
                    <img className='social-icon' src='./assets/social_media_icons/Instagram.svg' alt='Instagram Icon'></img>
                    <img className='social-icon' src='./assets/social_media_icons/Linkedin.svg' alt='LinkedIn Icon'></img>
                </div>
            </div>
            <div className='card'>
                <img className='avatar' src='./images/authors/Jenny.png' alt='Jenny Wilson'></img>
                <h3 className='name'>Jenny Wilson</h3>
                <p className='label'>Content Writer @Company</p>
                <div className='social-wrapper'>
                    <img className='social-icon' src='./assets/social_media_icons/Facebook.svg' alt='Facebook Icon'></img>
                    <img className='social-icon' src='./assets/social_media_icons/Twitter.svg' alt='Twitter Icon'></img>
                    <img className='social-icon' src='./assets/social_media_icons/Instagram.svg' alt='Instagram Icon'></img>
                    <img className='social-icon' src='./assets/social_media_icons/Linkedin.svg' alt='LinkedIn Icon'></img>
                </div>
            </div>
            <div className='card'>
                <img className='avatar' src='./images/authors/Leslie.png' alt='Leslie Alexander'></img>
                <h3 className='name'>Leslie Alexander</h3>
                <p className='label'>Content Writer @Company</p>
                <div className='social-wrapper'>
                    <img className='social-icon' src='./assets/social_media_icons/Facebook.svg' alt='Facebook Icon'></img>
                    <img className='social-icon' src='./assets/social_media_icons/Twitter.svg' alt='Twitter Icon'></img>
                    <img className='social-icon' src='./assets/social_media_icons/Instagram.svg' alt='Instagram Icon'></img>
                    <img className='social-icon' src='./assets/social_media_icons/Linkedin.svg' alt='LinkedIn Icon'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListOfAuthors;