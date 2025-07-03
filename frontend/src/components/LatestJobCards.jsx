import { Badge } from './ui/badge';
import React from 'react'

const LatestJobcards = () => {
  return (
    <div className=' p-5 rounded-md shadow-xl bg-white border-gray-100 cursor-pointer hover:bg-purple-100'>
      <div>
       <h1 className='font-medium text-lg'>Company Name</h1>
       <p className='text-sm text-gray-500'>India</p>
       </div>
       <div>
        <h1 className='font-bold text-lg my-2'>Job Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit nisi temporibus..</p>
       </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className='text-blue-700 font-bold'variant ="ghost"> 6 Vacancies</Badge>
        <Badge className='text-red-700 font-bold'variant ="ghost">Part  Time</Badge>
        <Badge className='text-indigo-700 font-bold'variant ="ghost">24 LPA</Badge>

      </div>
       
    </div>
  )
}

export default LatestJobcards;