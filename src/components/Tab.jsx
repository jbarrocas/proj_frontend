import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Tab.scss';

const Tab = () => {
    const [tab, setTab] = useState('aboutUs');

    const clickListener = (eventArgs)=>{
        let tabId = eventArgs.target.id;

        setTab(tab === tabId ? tabId : tabId);
    }

    const selectedTab = (tabId)=>{
        if(tabId === tab)
        return 'selected-tab'
    }

  return (
    <div className='tabs-container'>
        <div className='tabs'>
            <div id='aboutUs' className={'tab ' + selectedTab('aboutUs')} onClick={clickListener}>About Us</div>
            <div id='ourMission' className={'tab ' + selectedTab('ourMission')} onClick={clickListener}>Our Mission</div>
            <div id='ourStory' className={'tab ' + selectedTab('ourStory')} onClick={clickListener}>Our Story</div>
        </div>
        {tab === 'aboutUs' &&
            <div className='tab-content'>
                <div className='wrapper'>
                    <p className='tab-tag'>About Us</p>
                    <h2 className='tab-title'>We are a community of content writers who share their learnings</h2>
                    <p className='tab-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to='/about'><p className='tab-link'>Read More &#62;</p></Link>
                </div>
                <img className='tab-image' src='../images/tab/about-us.jpg' alt='About Us'></img>
            </div>
        }
        {tab === 'ourMission' &&
            <div className='tab-content'>
                <div  className='wrapper'>
                    <p className='tab-tag'>Our Mission</p>
                    <h2 className='tab-title'>Creating valuable content for creatives all around the world</h2>
                    <p className='tab-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec iaculis dui, sed laoreet diam. Aenean cursus, justo vel commodo sodales, purus tortor lacinia nisl, at porta velit felis ac metus. Maecenas et aliquet leo. Suspendisse in ipsum sit amet tellus tincidunt dictum ac eget ligula. In finibus augue nec mauris pulvinar condimentum. Vestibulum id neque sit amet turpis sollicitudin.</p>
                </div>
                <img className='tab-image' src='../images/tab/our-mission.jpg' alt='Our Mission'></img>
            </div>
        }
                {tab === 'ourStory' &&
            <div className='tab-content'>
                <div  className='wrapper'>
                    <p className='tab-tag'>Our Story</p>
                    <h2 className='tab-title'>We are from all around the world</h2>
                    <p className='tab-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec iaculis dui, sed laoreet diam. Aenean cursus, justo vel commodo sodales, purus tortor lacinia nisl, at porta velit felis ac metus. Maecenas et aliquet leo. Suspendisse in ipsum sit amet tellus tincidunt dictum ac eget ligula. In finibus augue nec mauris pulvinar condimentum. Vestibulum id neque sit amet turpis sollicitudin.</p>
                </div>
                <img className='tab-image' src='../images/tab/our-story.jpg' alt='Our Story'></img>
            </div>
        }
    </div>
  )
}

export default Tab;