import React from 'react';

import { postsData } from '../data/PostsData';

import '../styles/components/BlogPost.scss';
import ReadNext from './ReadNext';
import JoinOurTeam from './JoinOurTeam';



const BlogPost = (props) => {

  return (
    <>
    <div className='post-wrapper'>
      <div className='post-header-wrapper'>
        <div className='post-author-details'>
          <img className='author-image' src={props.authorPhoto} alt="" />
          <div className='author-date-wrapper'>
            <h3 className='post-author'>{props.author}</h3>
            <p className='post-date'>Posted on {props.date}</p>
          </div>
        </div>
          <h1 className='post-heading'>{props.title}</h1>
          <h4 className='post-tag'>{props.tag}</h4>
      </div>
      <img className='post-hero-image' src={props.url} alt={props.alt} />
      <div className='post-content'>
        <h2 className='post-subtitle'>{props.subtitle1}</h2>
        <p className='post-text'>{props.text}</p>
        <h2 className='post-subtitle'>{props.subtitle2}</h2>
        <p className='post-text'>{props.text1}</p>
        <p className='post-text'>{props.text2}</p>
        <ul className='post-list'>
          <li>{props.list1}</li>
          <li>{props.list2}</li>
          <li>{props.list3}</li>
        </ul>
        <p className='post-text'>{props.text3}</p>
        <h2 className='post-subtitle'>{props.subtitle3}</h2>
        <p className='post-text'>{props.text4}</p>
      </div>
    </div>
    
    <ReadNext data={ postsData }></ReadNext>
    <JoinOurTeam></JoinOurTeam>
    </>
  )
}

export default BlogPost;
