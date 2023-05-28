import React from 'react';

import ContactForm from '../components/ContactForm';

import '../styles/pages/ContactUs.scss';


function ContactUs() {
    return(
        <div className='contact-wrapper'>
            <div className='contact-header'>
                <p className='label'>Contact us</p>
                <h1 className='title'>Let’s Start a Conversation</h1>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>
            <div className='info-wrapper'>
                <div className='info-card'>
                    <p className='info-label'>Working hours</p>
                    <hr className='horizontal-line' />
                    <h5 className='info-detail'>Monday To Friday</h5>
                    <h5 className='info-detail'>9:00 AM to 8:00 PM </h5>
                    <p className='info'>Our Support Team is available 24/7</p>
                </div>
                <div className='info-card'>
                    <p className='info-label'>Contact Us</p>
                    <hr className='horizontal-line' />
                    <h5 className='info-detail'>020 7993 2905</h5>
                    <p className='info'>hello@finsweet.com</p>
                </div>
            </div>
            <ContactForm></ContactForm>        
        </div>
    )
}

export default ContactUs;