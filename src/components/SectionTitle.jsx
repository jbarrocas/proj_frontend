import React from 'react';

import '../styles/components/SectionTitle.scss';

const SectionTitle = (props) => {
  return (
    <h1 className='section-title'>{props.title}</h1>
  )
}

export default SectionTitle;