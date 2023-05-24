import React from 'react';
import { Link } from 'react-router-dom';



import './FeaturedPostBlog.scss';

const FeaturedPostBlog = ({ data }) => {

  const featuredPost = data.length - 1;  

    return (
        <div className='featured-post'>
            {data.map((item, id) => {
              return (
                <div className='fp-wrapper'>
                    <div className='text-wrapper'>
                        <p className={ featuredPost === id ? 'tag' : 'tag hidden' }>Featured Post</p>
                        <h2 className={ featuredPost === id ? 'title' : 'title hidden' }>{item.title}</h2>
                        <p className={ featuredPost === id ? 'author-date' : 'author-date hidden' } >By <span>{item.author}</span> | {item.date}</p>
                        <p className={ featuredPost === id ? 'text' : 'text hidden' }>{item.text}</p>
                        <div className={ featuredPost === id ? 'button' : 'button hidden' }>                    
                            <Link to='/#'>Read More &#62;</Link>
                        </div> 
                    </div>
                    <img className={ featuredPost === id ? 'image' : 'image hidden' } src={item.url} alt={item.alt}></img> 
                </div>
              )
            })}
        </div>
    )
}

export default FeaturedPostBlog;