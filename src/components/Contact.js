import React from 'react';
import '../components/ContactStyle.css';

export const Contact = () => {
  return (
    <>
      <h1 className='heading'>Contact Us</h1>
      <form className='contact' method='POST' action="https://formspree.io/f/maykpova">
      <div>
          <label htmlFor='name'>Name: </label><br/>
          <input type='text' placeholder='Enter your name'name='name' required autoComplete='off'/>
      </div>
      <div>
          <label htmlFor='email'>Email: </label><br/>
          <input type='email' placeholder='Enter your email' name='email' required  autoComplete='off' />
      </div>
      
      <div>
          <label htmlFor='mobile'>Mobile: </label><br/>
          <input type='text' placeholder='Enter your mobile number' name='mobile' required  autoComplete='off'/>
      </div>
      <div className='btnBox'>
              <button  type='submit'>Submit</button>
      </div>
      </form>
    </>
  )
}
