import React from 'react'
import '../components/Footerstyle.css';


export const Footer = () => {
  return (
    <>
         <div className='footer'>
            <div className='container container-flex'>
                <div className='icons'>
                   <i className='fa fa-twitter' ></i>
                   <i className='fa fa-facebook' ></i>
                   <i className='fa fa-instagram' ></i>
                   <i className='fa fa-linkedin' ></i>
                </div>

                  <div className='line'>
                      <p>Remember that happiness is a way of travel – not a destination.</p>
                  </div><br/>

                  <div className='copyright'>
                      <p>All rights reserved &copy;</p>
                      <p>Made by Abdul Rahamtullah shaik</p>
                  </div>
            </div>
          </div>
    
    
    </>
  )
}
