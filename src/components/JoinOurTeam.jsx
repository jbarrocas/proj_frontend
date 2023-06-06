import React from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from './SectionTitle';

import '../styles/components/JoinOurTeam.scss';

const JoinOurTeam = () => {
  return (
    <div className='join-section'>
        <SectionTitle className='section-title' title='Join our team to be a part of our story'></SectionTitle>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <Link to='/contact'><div className='button'>Join Now</div></Link>
    </div>
  )
}

export default JoinOurTeam;