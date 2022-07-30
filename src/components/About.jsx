import React from 'react'

export const About = () => {
  return (
    <div className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>Trusted by developer accross the world</h2>
          <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ab et ipsum eos dolor neque rem.</p>
        </div>
        <div className='grid md:grid-cols-3 px-2 text-center gap-1'>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100%</p>
            <p className='text-gray-400 mt-2'>Completion</p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>24/7</p>
            <p className='text-gray-400 mt-2'>Delivery</p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100K</p>
            <p className='text-gray-400 mt-2'>Transaction</p>
          </div>
        </div>
      </div>
    </div>
  )
}
