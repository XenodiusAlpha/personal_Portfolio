import React from 'react'
// imports useState hook from react
import { useState } from 'react';

// declares Contact function to be exported
const Contact = () => {
  // declaring formData variable to be set to empty on load
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to reset the formData state to empty
  const resetFormData = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // declaring empty error variables
  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [messageErr, setMessageErr] = useState('');

  // function to spread and set formData with the specific name and value passed in
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // function that handles the submit process
  const handleSubmit = (event) => {
    // prevents the page from being reloaded
    event.preventDefault();
    // sets the error variables to empty to only identify the proper fields needed to be filled.
    setNameErr('');
    setEmailErr('');
    setMessageErr('');
    // if the name text box is empty on submit, it will set the error and exit the function
    if (formData.name === '') {
      setNameErr('Please input a name.');
      return;
    // if the email text box is empty on submit, it will set the error and exit the function
    } else if (formData.email === '') {
      setEmailErr('Please input an email.');
      return;
    // if the message text area is empty on submit, it will set the error and exit the function
    } else if (formData.message === '') {
      setMessageErr('Please input a message.');
      return;
    }
    console.log('submited', formData);
    resetFormData();
  }

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" 
               id='name'
               name='name'
               value={formData.name}
               placeholder='Your name here'
               onChange={changeHandler}
        />
        <p>{nameErr}</p>
        <label htmlFor="email">Email:</label>
        <input type="email" 
               id='email'
               name='email'
               value={formData.email}
               placeholder='Your email here'
               onChange={changeHandler}
        />
        <p>{emailErr}</p>
        <label htmlFor="message">Message:</label>
        <textarea name="message" 
                  id="message" 
                  cols="30" 
                  rows="10" 
                  value={formData.message}
                  placeholder='Your message here'
                  onChange={changeHandler}
        />
        <p>{messageErr}</p>
        <button type='Submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact