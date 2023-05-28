import React, { useState } from 'react';
// import { useForm } from 'react-hook-form'



import '../styles/components/ContactForm.scss';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [message, setMessage] = useState('');

    const handleName = e => {
        setName(e.target.value);
    };

    const handleEmail = e => {
        setEmail(e.target.value);
    };

    const handleQuery = e => {
        setQuery(e.target.value);
    };

    const handleMessage = e => {
        setMessage(e.target.value);
    };


  return (
    <div>
        <form className='form'>
            <input className='input' type='text' placeholder='Full Name' value={name} onChange={handleName} required pattern='([a-zA-Z]+\s){1,}([a-zA-Z]+)'></input>
            <input className='input' type='text' placeholder='Your Email' value={email} onChange={handleEmail} required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' ></input>
            <select className='input select' value={query} onChange={handleQuery} required>
                <option value='' disabled={true}>Query Related</option>
                <option value='business'>Business</option>
                <option value='startup'>Startup</option>
                <option value='economy'>Economy</option>
                <option value='technology'>Technology</option>
                <option value='laranjas'>Laranjas</option>
                <option value='bananas'>Bananas</option>
            </select>
            <textarea className='input message' type='text-area' id='message' placeholder='Message' value={message} onChange={handleMessage} required ></textarea>
            <button className='yellowButton' type='submit'>Send Message</button>
            <div></div>
        </form>
    </div>
  )
}

export default ContactForm;