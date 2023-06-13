import React from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from './SectionTitle';

import '../styles/components/ListOfAuthors.scss';

const ListOfAuthors = ({ data }) => {

    return (
      <div className='authors-section'>
        <SectionTitle className='section-title-center' title='List of Authors'></SectionTitle>
        <div className='cards'>
          {data.map((item, id) => {
              return (
                  <div key={id} className='card'>
                      <img className='avatar' src={item.image} alt={item.name}></img>
                      <h3 className='name'>{item.name}</h3>
                      <p className='label'>{item.position}</p>
                      <div className='social-wrapper'>
                          <Link to={item.face} target='blank'><img className='social-icon' src={item.icon1} alt='Facebook Icon'></img></Link>
                          <Link to={item.twitter} target='blank'><img className='social-icon' src={item.icon2} alt='Twitter Icon'></img></Link>
                          <Link to={item.insta} target='blank'><img className='social-icon' src={item.icon3} alt='Instagram Icon'></img></Link>
                          <Link to={item.linkedin} target='blank'><img className='social-icon' src={item.icon4} alt='LinkedIn Icon'></img></Link>
                      </div>
                  </div>
              )
          })}
        </div>
      </div>
    )
  }
  
  export default ListOfAuthors;