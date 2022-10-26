import React from 'react';
import { Link } from 'react-router-dom';


export const Card = (props) => {
  return (
    <>
         <div className='card'>

            <h2>{props.title1}</h2>

            <img src={props.imgsource} alt='trecking' className='servicesImg' />

            <p>{props.desc1}</p>

            <div className='btnBox'>
              <div className='btn'>
                <Link  to="/contact" className='readmore' >{props.btnService}</Link>
              </div>
            </div>

          </div>   
    </>
  )
}
