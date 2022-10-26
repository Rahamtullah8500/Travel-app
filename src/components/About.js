import React from 'react';
import Same from './Same';
import videobg from '../components/Video2.mp4';

export const About = () => {
  return (
    <>
      <Same
        title="COVER THE EARTH BEFORE IT COVERS YOU!"
        text="Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. So throw off the bowlines, sail away from the safe harbor.
        
        Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts. Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all one’s lifetime.

        The wish to travel seems characteristically human; the desire to move, to satisfy your curiosity or ease your fears, to change the circumstances of your life, to be a stranger, to make a friend, to experience an exotic landscape, to risk the unknown."


        video={videobg}


        btn="Read more.."
      />
    </>
  )
}
