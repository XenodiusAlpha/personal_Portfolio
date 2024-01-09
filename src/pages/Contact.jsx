import React from 'react'
import { useState } from 'react';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submited');
  }

  return (
    <div>
      <h1>Contact</h1>
      <form action={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" 
               id='name'
               name='name'
               value={formData.name}
               placeholder='Your name here'
        />
        <label htmlFor="email">Email:</label>
        <input type="text" 
               id='email'
               name='email'
               value={formData.email}
               placeholder='Your email here'
        />
        <label htmlFor="message">Message:</label>
        <textarea name="message" 
                  id="message" 
                  cols="30" 
                  rows="10" 
                  placeholder='Your message here'
                  value={formData.message}
        />
        <button type='Submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact