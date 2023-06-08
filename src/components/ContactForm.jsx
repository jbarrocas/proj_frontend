import React, { useState } from 'react';
// import { useForm } from 'react-hook-form'



import '../styles/components/ContactForm.scss';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [message, setMessage] = useState('');

    const handleName = event => {
        setName(event.target.value);
    };

    const validateName = () => {
        const regex =  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
        if(regex.test(name)) {
          setName('');
        }
        else {
          setName('Please, insert your full name.');
        }
    };

    const handleEmail = event => {
        setEmail(event.target.value);
    };

    const validateEmail = () => {
        const regex = /[a-zA-Z0-9.!#$&'*/=?^_`%+-{|}~]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}(.[a-zA-Z{2,8}])?/g;
        if(regex.test(email)) {
          setEmail('');
        }
        else {
          setEmail('Please, insert a valid e-mail adress.');
        }
    };

    const handleQuery = event => {
        setQuery(event.target.value);
    };

    const validateQuery = () => {
        if(query === 'null') {
            setQuery('Please, choose an option');
        }
        else {
            setQuery('');
        }
    }

    const handleMessage = event => {
        setMessage(event.target.value);
    };

    const validateMessage = () => {
        const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
        if(regex.test(message)) {
          setMessage('');
        }
        else {
          setMessage('Please, insert your message.');
        }
    };

    const inputValidation = () => {
        validateName();
        validateEmail();
        validateQuery();
        validateMessage();
    }


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
            <div className='submit-button' type='submit'
            onClick={inputValidation}>Send Message</div>
            <div></div>
        </form>
    </div>
  )
}

export default ContactForm;