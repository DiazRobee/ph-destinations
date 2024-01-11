import React from 'react'

import Coron from '../assets/coron.jpg';
import Boracay from '../assets/boracay.jpg';
import ElNido from '../assets/elnido.jpg';
import Kawasan from '../assets/kawasanfallscebu.jpg';
import RiceTerraces from '../assets/riceterraces.jpg';
import Tubbataha from '../assets/tubbatahareef.jpg';  
const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>On the Caribbean's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Tubbataha} alt="/" />
            <img className='w-full h-full object-cover' src={Kawasan} alt="/" />
            <img className='w-full h-full object-cover' src={Boracay} alt="/" />
            <img className='w-full h-full object-cover' src={Coron} alt="/" />
            <img className='w-full h-full object-cover' src={RiceTerraces} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations