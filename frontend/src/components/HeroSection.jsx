import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
        <span className= 'mx-auto px-4 py-2 rounded-full  bg-gray-100 text-purple-400 font-medium'>Built for job seekers, powered by ambition.</span>
        <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Job</span></h1>
        <p>A modern job portal connecting talented students and recruiters with opportunities that match their skills.</p>
        </div>
        <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
      <input
      type="text"
      className='outline-none border-none w-full'
      placeholder="Recruit. Apply. Grow."

      />
      <Button className=' rounded-r-full bg-[#6A38C2]'> 
        <Search className='h-5 w-5 text-white'/>
      </Button>
        </div>
        
    
    </div>
  )
}

export default HeroSection