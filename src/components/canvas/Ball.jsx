import React from 'react';
import './Ball.css';

const BallCanvas = ({ icon }) => {
  return (
    <div id="ball" className='w-full aspect-square h-fit flex items-center justify-center border-white-100 border-opacity-100 border-b-[2px] cursor-pointer'>
      <img src={icon} alt='icon' className='w-[70%]' />
    </div>
  )
}

export default BallCanvas;