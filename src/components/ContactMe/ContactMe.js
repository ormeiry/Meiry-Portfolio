import React from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

import './ContactMe.css';

const ContactMe = () => {
  const sendEmail = (e) => {
    init(process.env.REACT_APP_USER_ID);
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form className='contact-form' onSubmit={sendEmail}>
      <input type='hidden' name='contact_number' />
      <label>Name</label>
      <input type='text' name='name' />
      <label>Email</label>
      <input type='email' name='email' />
      <label>Message</label>
      <textarea name='message' />
      <input type='submit' value='Send' />
    </form>
  );
};

export default ContactMe;
