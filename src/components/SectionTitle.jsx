import React from 'react';

import '../styles/components/SectionTitle.scss';

const SectionTitle = (props) => {
  return (
    <h1 className={props.className}>{props.title}</h1>
  )
}

export default SectionTitle;