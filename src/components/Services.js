import React from 'react';
import '../components/Services.css';
import { Card } from '../Card';
import Data from '../Data';

export const Services = () => {
  return (
    <>
      <h1>Our Services</h1>
      <div className='services'>
         {Data.map((values)=>{
             return(
              <Card
                title1={values.stitle}
                imgsource={values.imgsrc}
                desc1={values.desc1}
                btnService={values.btnservices}
              />
             )
         })}
      </div>
    </>
  )
}
