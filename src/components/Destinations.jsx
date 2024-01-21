import React from 'react';
import {FaPesoSign} from 'react-icons/fa6';
import { TiMessages } from "react-icons/ti";
import { MdOutlineFoodBank } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";

import phMap from '../assets/phMap.webp';
 
const Destinations = () => {
  return (
    <div  className='max-w-[1240px] min-h-[1000px] h-screen mb-[400px] md:mb-auto mx-auto py-16 px-4 text-center'>
        <h1>Welcome to the Philippines</h1>
        <p className='py-4 text-left'>Comprised of over 7,000 islands, the Philippines is a tropical paradise that offers something for everyone. From the white-sand beaches of Boracay, stunning rice terraces of Banaue, to breathtaking pristine waters of Palawan, the Philippines is a destination that is sure to leave you in awe.</p>
        <div className='grid grid-rows-none md:grid-cols-4 py-4 gap-2 md:gap-2 h-full'>
            <img className='w-full h-[600px] object-fit col-span-2 md:col-span-3 row-span-2 ' src={phMap} alt="/" />
            <div className='mx-auto grid grid-cols-4  gap-2'>

                <div className='flex justify-center col-span-1'>
                 <FaPesoSign size={25} style={{color: '#16a34a'}}  />
                </div>
                <div className='grid md:grid-rows-3 text-left col-span-3 md:max-w-48'>
                  <h6 className='font-bold'>Currency</h6>
                  <p className='text-[14px] row-span-2'>Philippine Peso</p>
                </div>

              <div className='flex justify-center col-span-1 '>
                 <TiMessages size={25} style={{color: '#16a34a'}} />
                </div>
              <div className='grid md:grid-rows-3 text-left col-span-3 md:max-w-48'>
                  <h6 className='font-bold'>Say Hello</h6>
                  <p className='text-[14px] row-span-2'>Kamusta</p>
              </div>

              <div className='flex justify-center col-span-1 '>
                 <MdOutlineFoodBank size={25} style={{color: '#16a34a'}} />
              </div>
              <div className='grid md:grid-rows-3 text-left col-span-3 md:max-w-48'>
                  <h6 className='font-bold'>Famous Local Dishes</h6>
                  <p className='text-[14px] row-span-2'>Adobo, Sinigang, Kare-kare, Lumpia, Inasal</p>
              </div>

              <div className='flex justify-center col-span-1'>
                 <FaPlaneDeparture size={25} style={{color: '#16a34a'}} />
              </div>
              <div className='grid md:grid-rows-3 text-left col-span-3 md:max-w-48'>
                  <h6 className='font-bold row-auto'>Major Airports</h6>
                  <p className='text-[14px]'>Ninoy Aquino (Manila): MNL</p>
                  <p className='text-[14px]'>Puerto Princesa: (PPS)</p>
              </div>

              <div className='flex justify-center col-span-1'>
                 <IoTimeOutline size={25} style={{color: '#16a34a'}} />
              </div>
              <div className='grid md:grid-rows-3 text-left col-span-3 md:max-w-48'>
                  <h6 className='font-bold row-auto'>TimeZone</h6>
                  <p className='text-[14px] row-span-2'>(GMT+8)</p>
              </div>


            </div>
          
        </div>
    </div>
  )
} 

export default Destinations