import React from 'react';
import phVid from '../assets/ph.mp4'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={phVid}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1 className=' text-5xl'>Explore Philippines</h1>
        <h2 className='py-4'>Discover what's more to love.</h2>
        
      </div>
    </div>
  );
};

export default Hero;