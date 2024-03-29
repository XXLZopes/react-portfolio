import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './contact.css';

function ContactForm() {
const [formState, setFormState] = useState({ name: '', email: '', message: '' });
const { name, email, message } = formState;
const [errorMessage, setErrorMessage] = useState('');

function handleChange(e) {
        
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
                setFormState({...formState, [e.target.name]: '' });
            } else {
                setErrorMessage('');
                setFormState({...formState, [e.target.name]: e.target.value });
            }
            if (e.target.name === 'email') {
                const isValid = validateEmail(e.target.value);
                // console.log(isValid);
                //isValid conditional statement
                if (!isValid) {
                    setErrorMessage('Please enter a valid email address.');
                    setFormState({...formState, [e.target.name]: '' });
                } 
else {
        setFormState({...formState, [e.target.name]: e.target.value });

    }
}

    console.log('errorMessage: ', errorMessage);
}
// console.log(formState);
function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);

    window.open('mailto:test@example.com?subject=subject&body=body');
}

    return(
    <section>
        <h1>Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlurCapture={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="text" name="email" defaultValue={email} onInput={handleChange}/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onBlurCapture={handleChange} />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    </section>
    );
}

export default ContactForm;