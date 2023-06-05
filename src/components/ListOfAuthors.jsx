import React from 'react';

import SectionTitle from './SectionTitle';

import '../styles/components/ListOfAuthors.scss';

const ListOfAuthors = ({ data }) => {

    return (
      <div className='authors-section'>
          <SectionTitle title='List of Authors'></SectionTitle>
          <div className='cards'>
            {data.map((item, id) => {
                return (
                    <div key={id} className='card'>
                        <img className='avatar' src={item.image} alt={item.name}></img>
                        <h3 className='name'>{item.name}</h3>
                        <p className='label'>{item.position}</p>
                        <div className='social-wrapper'>
                            <img className='social-icon' src={item.icon1} alt='Facebook Icon'></img>
                            <img className='social-icon' src={item.icon2} alt='Twitter Icon'></img>
                            <img className='social-icon' src={item.icon3} alt='Instagram Icon'></img>
                            <img className='social-icon' src={item.icon4} alt='LinkedIn Icon'></img>
                        </div>
                    </div>
                )
            })}
          </div>
      </div>
    )
  }
  
  export default ListOfAuthors;