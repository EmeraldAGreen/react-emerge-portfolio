import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import { validateEmail } from '../../utils/helpers';

function Contact() {
   // set initial form state
  const initialState = 
  {name: '',
  email: '',
  message: ''}

  const [formState, setFormState] = useState(initialState);

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

   // update state based on form input changes
   const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!errorMessage) {
      console.log('Submit Form', formState);
    }

    try {
    const result = await emailjs.sendForm('service_5prjdgi', 'template_r3ma62p', e.target, 'J8XVdy_RvubhLkrw3')
    console.log(result.text)
    alert("Message has been sent successfully!");
    }
    catch (err) {
    console.log(err.text)
    }
    // clear form values
    setFormState(initialState);
  };
 

  return (
    <section className="container-center-horizontal">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
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

export default Contact;
