import React from 'react'

import Coron from '../assets/coron2.jpg';
import Boracay from '../assets/boracay.jpg';
import ElNido from '../assets/elnido2.jpg';
import Kawasan from '../assets/kawasanfallscebu.jpg';
import RiceTerraces from '../assets/riceterraces.jpg';
import Tubbataha from '../assets/tubbatahareef.jpg';  
import Siargao from '../assets/siargao.jpg'


const Selects = () => {
  return (
    <div name='selects' className='max-w-[1240px] min-h-[1000px] mx-auto px-4 py-16 grid lg:grid-cols-2  gap-4'>
      {/* grid item */}
      <div className='grid md:grid-cols-2 gap-4 bg-gray-200 p-2'>
        {/* image div */}
        <div>
          <img src={Coron} alt="Coron" className='object-cover h-full w-full' />
        </div>
        {/* description div */}
        <div className='flex flex-col items-center px-4'>
          <h5 className='font-bold'>Coron Tour</h5>
          <p className='py-4 text-justify'>It has caught the attention of many due to its World War II wreck diving spots, beautiful rock formations, and unbelievably clear waters. It is also considered the more quiet and laidback sibling of El Nido, another famous Palawan destination because of its gorgeous waters and scenery.</p>
          <button className='w-full'>BOOK NOW</button>
        </div>
      </div>
        {/* End of grid item */}
        {/* grid item */}
      <div className='grid md:grid-cols-2 gap-4 bg-gray-200 p-2'>
        {/* image div */}
        <div>
          <img src={Boracay} alt="Boracay" className='object-cover h-full w-full' />
        </div>
        {/* description div */}
        <div className='flex flex-col items-center px-4'>
          <h5 className='font-bold'>CEBU and BORACAY Tour</h5>
          <p className='py-4 text-justify'>From swimming with huge schools of sardines, to private drinks and dinner on a white sandbank in the middle of a tropical ocean. A world of friendly locals, rich and unique culture, waterfalls, and some of the whitest sand you will ever see in your life!</p>
          <button className='w-full'>BOOK NOW</button>
        </div>
      </div>
        {/* End of grid item */}
      {/* grid item */}
      <div className='grid md:grid-cols-2 gap-4 bg-gray-200 p-2'>
        {/* image div */}
        <div>
          <img src={ElNido} alt="El Nido" className='object-cover h-full w-full' />
        </div>
        {/* description div */}
        <div className='flex flex-col items-center px-4'>
          <h5 className='font-bold'>El Nido Tour</h5>
          <p className='py-4 text-justify'>Famous for its white-sand beaches, turquoise waters, coral reefs, and splendid limestone rock formation. El Nido is knows as the Philippines's last frontier. This is a bucket list destination that you do not want to miss while you’re in Asia.</p>
          <button className='w-full'>BOOK NOW</button>
        </div>
      </div>
        {/* End of grid item */}
      {/* grid item */}
      <div className='grid md:grid-cols-2 gap-4 bg-gray-200 p-2'>
        {/* image div */}
        <div>
          <img src={Siargao} alt="Siargao" className='object-cover h-full w-full' />
        </div>
        {/* description div */}
        <div className='flex flex-col items-center px-4'>
          <h5 className='font-bold'>Siargao Tour</h5>
          <p className='py-4 text-justify'>Surrounded by crystal clear turquoise waters, covered in coconut palm trees and known as the "Surfing Capital of the Philippines," the island boasts some of the most influential surf breaks in the world. Its reliable surfing conditions all year round offer something for all skill levels.</p>
          <button className='w-full'>BOOK NOW</button>
        </div>
      </div>
        {/* End of grid item */}
    {/* grid item */}
    <div className='grid md:grid-cols-2 gap-4 bg-gray-200 p-2'>
        {/* image div */}
        <div>
          <img src={RiceTerraces} alt="Rice Terraces" className='object-cover h-full w-full' />
        </div>
        {/* description div */}
        <div className='flex flex-col items-center px-4'>
          <h5 className='font-bold'>Northern Luzon Tour</h5>
          <p className='py-4 text-justify'>Experience the best of North Luzon Highlands in the Philippines, including the top attractions in Vigan, Baguio, and Benguet, with this package. This hassle-free vacation package includes roundtrip flights from Manila, land transfers, and accommodation. </p>
          <button className='w-full'>BOOK NOW</button>
        </div>
      </div>
        {/* End of grid item */}
      {/* grid item */}
      <div className='grid md:grid-cols-2 gap-4 bg-gray-200 p-2'>
        {/* image div */}
        <div>
          <img src={Tubbataha} alt="Tubbataha" className='object-cover h-full w-full' />
        </div>
        {/* description div */}
        <div className='flex flex-col items-center px-4'>
          <h5 className='font-bold'>Puerto Princesa Tour</h5>
          <p className='py-4 text-justify'>Explore a UNESCO World Heritage Underground River, visit some of the world’s most breaktaking island hopping destinations, cook with locals, climb coconut trees and even stay overnight at a private beach camp. Relax under the stars and snorkel with turtles</p>
          <button className='w-full'>BOOK NOW</button>
        </div>
      </div>
        {/* End of grid item */}
    
        
    </div>
  )
}

export default Selects