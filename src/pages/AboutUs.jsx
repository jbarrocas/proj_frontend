import React from 'react';
import WhatToReadNext from '../components/WhatToReadNext';

import { postsData } from '../data/PostsData';


function About_Us() {
  return (
    <div>
        <WhatToReadNext data={postsData} />
    </div>
  )
}

export default About_Us;