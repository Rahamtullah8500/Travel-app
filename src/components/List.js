import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/ListStyle.css';




export const List = () => {
  return (
    <>
    <header>
    <div className='container container-flex'>
        <div className='logo'>
            <img src='https://img.freepik.com/free-vector/travel-time-typography-design_1308-84740.jpg?size=626&ext=jpg&ga=GA1.2.1610345535.1666505912&semt=sph' alt='logo' />
           
        </div>
        <nav className='list'>
            
                <NavLink   to="home"  className=' listItem' >Home</NavLink>
                <NavLink  to="about" className='listItem' >About</NavLink>
                <NavLink  to="services" className='listItem' >Services</NavLink>
                <NavLink  to="contact" className='listItem' >Contact</NavLink>
                <NavLink  to="policy" className='listItem' >Policy</NavLink>
            
        </nav>
        <div className='icons'>
             <i className='fa fa-search' ></i>
             <i className='fa fa-user'></i>
             <i className='fa fa-phone'></i>
        </div>
    </div>
    </header>
    </>
  )
}
