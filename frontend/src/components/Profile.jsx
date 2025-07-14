import React from 'react'
import Navbar from './shared/Navbar'
import {Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import {  Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge';
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
const skills =["HTML","CSS","Express.js","React.js"]
const Profile = () => {
  const isResume=true;
  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
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
            <Button className="text-right hover:bg-gray-100" variant="outline" > <Pen/> </Button>
            </div>
            <div className='my-5'>
              <div className='flex items-center gap-3 mt-3'>
              <Mail/>
              <span>Akshay@gmail.com</span>
              </div>
              <div className='flex items-center gap-3 my-2 '>
              <Contact/>
              <span>+91 XXXXXXXXXX</span>
              </div>
            </div>
            <div>
              <h1 className='font-bold '>Skills</h1>
              <div className='flex items-center gap-1 '>
              {
                skills.length != 0 ? skills.map((item, index) => <Badge  className=" text-white rounded-full bg-black"key={index}>{item}</Badge>) : <span>NA</span>
              }
              </div>
            
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5 my-3'>
              <Label className="text-md font-bold">Resume</Label>
              {
                isResume ? <a target= 'blank' href ='https://youtube.com' className='text-purple-500 w-full hover:underline cursor-pointer'>Akshay</a>: <span>NA</span>
              }
            </div>
        
           
           
    </div>
    <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
            <h1 className='font-bold text-lg my-5'>Applied jobs</h1>
              {        }
              <AppliedJobTable/>
                
        </div>
           
    </div>
  )
}

export default Profile