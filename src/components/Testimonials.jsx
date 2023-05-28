import React, { useState } from 'react';

import '../styles/components/Testimonials.scss';

const Testimonials = ({ data }) => {
    const [testimonial, setTestimonial] = useState(0);

    const nextTestimonial = () => {
        setTestimonial( testimonial === data.length - 1 ? 0 : testimonial + 1 );
    }

    const prevTestimonial = () => {
        setTestimonial( testimonial === 0 ? data.length - 1 : testimonial - 1 );
    }
    
    return (
        <div className='testimonials-section'>
            <div className='testimonials-text'>
                <p className='tag'>Testimonials</p>
                <h2 className='title'> What people say about our blog</h2>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className='vertical-line'></div>
            {data.map((item, id) => {
                return (
                    <div key={id} className={ testimonial === id ? 'testimonials-carousel' : 'testimonials-carousel hidden'}>
                        <h4 className='testimonial'>{item.testimonial}</h4>
                        <div className='avatar-arrows'>
                            <div className='avatar-wrapper'>
                                <img className='avatar' src={item.image} alt="" />
                                <div className='identity'>
                                    <h4 className='name'>{item.name}</h4>
                                    <p className='location'>{item.city}, {item.country}</p>
                                </div>
                            </div>

                            <div className='arrows'>
                                <div className='left-arrow' onClick={prevTestimonial}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className='right-arrow' onClick={nextTestimonial}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Testimonials;