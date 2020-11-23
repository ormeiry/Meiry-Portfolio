import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { useForm } from 'react-hook-form';

import './ContactMe.css';
import { toast } from 'react-toastify';

const ContactMe = () => {
  init(process.env.REACT_APP_USER_ID);
  const formRef = useRef();

  const errMsg = {
    name: 'Please enter your name or a company name',
  };

  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
  });
  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current
      )
      .then(
        (result) => {
          reset();
          toast.info('Thank You!', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          toast.error('Something went wrong... Please try again.', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <div className='contact-me'>
      <h2>Contact Me</h2>
      <p>You can do it via</p>
      <div className='contact-icons'>
        <a
          href='https://www.linkedin.com/in/or-meiry-618b3719b/'
          target='_blank'
          rel='noopener'
        >
          <i className='fab fa-linkedin fa-3x'></i>
        </a>
        <a href='mailto: ormeiry2411@gmail.com'>
          <i className='fa fa-envelope fa-3x' aria-hidden='true'></i>
        </a>
      </div>
      <p>Or leave a message</p>
      <form
        className='contact-form'
        onSubmit={handleSubmit(sendEmail)}
        ref={formRef}
      >
        <input
          placeholder='Name'
          type='text'
          name='name'
          ref={register({ required: true })}
        />
        {errors.name && (
          <h4 className='err-text'>
            Please enter your name or a company name.
          </h4>
        )}
        <input
          placeholder='Email'
          type='email'
          name='email'
          ref={register({ required: true })}
        />
        {errors.email && (
          <h4 className='err-text'>
            Please enter an email address I can write back to.
          </h4>
        )}
        <textarea
          placeholder='Message'
          name='message'
          ref={register({ required: true, maxLength: 300 })}
        />
        {errors.message && (
          <h4 className='err-text'>
            Please enter some content to the message.
          </h4>
        )}
        <button type='submit'>
          <i className='fas fa-paper-plane'></i>
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
