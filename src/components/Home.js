import React from 'react';
import '../components/HomeAbout.css';
import Same from './Same';
import videobg from '../components/Video1.mp4';
export const Home = () => {
  return (
  <>
    
      <Same
      title="TIME TO TRAVEL."
      
      text="Traveling is full of surprises.Traveling could an awesome way for education. You can learn lots of things by doing this. There are lots of people around the world who is traveling to learn more."

     video={videobg}

      btn="Start Journey"
      />
     
    </>
  
  )
}
