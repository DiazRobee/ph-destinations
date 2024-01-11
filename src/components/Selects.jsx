import React from 'react'

import Coron from '../assets/coron.jpg';
import Boracay from '../assets/boracay.jpg';
import ElNido from '../assets/elnido.jpg';
import Kawasan from '../assets/kawasanfallscebu.jpg';
import RiceTerraces from '../assets/riceterraces.jpg';
import Tubbataha from '../assets/tubbatahareef.jpg';  
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={Coron} text='Coron' />
    <SelectsCard bg={Boracay} text='Boracay' />
    <SelectsCard bg={ElNido} text='El Nido' />
    <SelectsCard bg={Kawasan} text='Cebu Kawasan Falls' />
    <SelectsCard bg={RiceTerraces} text='Banaue Rice Terraces' />
    <SelectsCard bg={Tubbataha} text='Tubbataha Reef' />
    
        
    </div>
  )
}

export default Selects