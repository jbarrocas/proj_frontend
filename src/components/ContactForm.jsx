import React, { useState } from 'react';

import '../styles/components/ContactForm.scss';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [requiredName, setRequiredName] = useState('');
    const [email, setEmail] = useState('');
    const [requiredEmail, setRequiredEmail] = useState('');
    const [query, setQuery] = useState('');
    const [requiredQuery, setRequiredQuery] = useState('');
    const [message, setMessage] = useState('');
    const [requiredMessage, setRequiredMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleName = event => {
        setName(event.target.value);
    };

    const validateName = () => {
        const regex =  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
        if(regex.test(name)) {
          setRequiredName('');
        }
        else {
          setRequiredName('error-message');
        }
    };

    const handleEmail = event => {
        setEmail(event.target.value);
    };

    const validateEmail = () => {
        const regex = /[a-zA-Z0-9.!#$&'*/=?^_`%+-{|}~]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}(.[a-zA-Z{2,8}])?/g;
        if(regex.test(email)) {
          setRequiredEmail('');
        }
        else {
          setRequiredEmail('error-message');
        }
    };

    const handleQuery = event => {
        setQuery(event.target.value);
    };

    const validateQuery = () => {
        if(query !== '') {
            setRequiredQuery('Query Related');
        }
        else {
            setRequiredQuery('error-message');
        }
    };

    const handleMessage = event => {
        setMessage(event.target.value);
    };

    const validateMessage = () => {
        if(message !== '') {
          setRequiredMessage('');
        }
        else {
          setRequiredMessage('error-message');
        }
    };

    const inputValidation = () => {
        validateName();
        validateEmail();
        validateQuery();
        validateMessage();
    };

    const formValidation = () => {
        if(requiredName !== 'error-message' && requiredEmail !== 'error-message' && requiredQuery !== 'error-message' && requiredMessage !== 'error-message') {
            setName('');
            setEmail('');
            setMessage('');
            successMessage === '' ? setSuccessMessage('error-message') : setSuccessMessage('success-message');     
        }
        else {
            return;
        }
    };

  return (
    <form className='form' id='form' action='' method='get'>
        <div className='name-wrapper wrapper'>
            <input className='input input-name' type='text' placeholder='Full Name' value={name} onChange={handleName} required></input>
            <p className={ requiredName === 'error-message' ? 'error-message-name' : 'hidden'}>* Required</p>
        </div>
        <div className='mail-wrapper wrapper'>
            <input className='input input-email' type='text' placeholder='Your Email' value={email} onChange={handleEmail} required></input>
            <p className={ requiredEmail === 'error-message' ? 'error-message-email' : 'hidden'}>* Required</p>
        </div>
        <div className='select-wrapper wrapper'>
            <select className='input input-select' value={query} onChange={handleQuery} required>
                <option value='' disabled={true}>Query Related</option>
                <option value='business'>Business</option>
                <option value='startup'>Startup</option>
                <option value='economy'>Economy</option>
                <option value='technology'>Technology</option>
            </select>
            <p className={ requiredQuery === 'error-message' ? 'error-message-query' : 'hidden'}>* Required</p>
        </div>
        <div className='message-wrapper wrapper'>
            <textarea className='input input-message' id='message' type='text-area' placeholder='Message' value={message} onChange={handleMessage} required ></textarea>
            <p className={ requiredMessage === 'error-message' ? 'error-message' : 'hidden'}>* Required</p>
        </div>
        <div className='submit-button' type='submit'
            onClick={() => {inputValidation(); formValidation()}}>Send Message
        </div>
        <p className={ (successMessage === '' || successMessage === 'error-message') ? 'hidden' : 'success-message' }>Your message has been received. Thank you.</p>
    </form>
  )
}

export default ContactForm;