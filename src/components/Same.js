import React from 'react';
import { Link } from 'react-router-dom'

export default function Same(props) {
  return (
    <>
        <div className='mainSection'>
          <div className='contentBox'>
            <h1>{props.title}</h1>
           
            <hr/>
            <p>{props.text}</p>
            

            <div className='btnBox'>
              <div className='btn'>
                <Link  to="/contact" className='readmore' >{props.btn}</Link>
              </div>
            </div>

          </div>

          <div className='videocontainer'>
              <video src={props.video} autoPlay loop muted />
          </div>

      </div>
    </>
  )
}
