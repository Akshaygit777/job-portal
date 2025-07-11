import React from 'react'
import Navbar from './shared/Navbar'
import {Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Pen } from 'lucide-react'

const Profile = () => {
  return (
    <div>
        <Navbar/>
        <div className='m-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
            <div className='flex justify-between'>
            <div className='flex item-center gap-7'>
            <Avatar className=" h-24 w-24">
            <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"/>
         
          </Avatar>
          <div>
          <h1 className='font-medium text-xl '>Full Name</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatum aspernatur molestiae officiis quas?
          </p>
          </div>
          
         
            </div>
            <Button className="text-right text-bold" variant="outline" > <Pen/> </Button>
            </div>
           
    </div>
    </div>
  )
}

export default Profile