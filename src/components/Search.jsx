import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div name='book' className='max-w-[1240px] min-h-[800px] mb-[500px] sm:mb-[350px] md:mb-[200px] lg:mb-auto h-screen mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR YOU AND YOUR FAMILY</h2>
          <p className='py-4'>
          We specialize in once in a lifetime trips, giving you that off-the-beaten track adventure you’ve been searching for. We’ve explored high and low to find unique activities in each of our hand picked destinations. What you see on your itinerary is what you get; our tours are full of inclusions (no sneaky hidden costs!) so you won’t find yourself putting your hand in your pocket every time you want to participate. Spend your days making the most of every minute; we’ll take care of the rest!
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1 px-8 text-justify' >Top-tier customer service. We’ll provide you with a stress-free experience throughout whole trip.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>AWARD WINNING TOURS</h3>
                <p className='py-1 px-8 text-justify'>In 2019 our Philippines tour won Asia Tour of the Year, something which we are immensely proud of!</p>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div className='border text-center'>
              <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
              <p className='py-4'>12 HOURS LEFT</p>
              <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Select Tour</label>
                  <select className='border rounded-md p-2'>
                    {/* should change options */}
                      <option>Coron</option>
                      <option>Cebu and Boracay</option>
                      <option>El Nido</option>
                      <option>Siargao</option>
                      <option>Northern Luzon</option>
                      <option>Puerto Princesa</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
          </form>
      </div>
    </div>
  );
};

export default Search;