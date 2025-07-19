import React from 'react'
import { Button } from './ui/button'
import {   Bookmark } from 'lucide-react'
import { Badge } from './ui/badge';
import { Avatar, AvatarImage } from './ui/avatar'
import { useNavigate } from 'react-router-dom';

const Job = () => {
    const navigate = useNavigate();
    const jobId = "jkjkwdlw";

  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 '>
        
        <div className='flex items-center justify-between'>
        <p className='text-sm  text-gray-500 '>
            2 days ago </p>
            <Button variant="outline" className="rounded-full" size="icon"><Bookmark strokeWidth={2.5}/></Button>

        </div>
       
            <div className='flex items-center gap-2 my-2'>
            <Button className="p-6" variant="outline" size="icon">
                <Avatar>
                    <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"/>
                </Avatar>
            </Button>
            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>

            </div>
            <div>
                 <h1 className='font-bold text-lg my-2'>Title</h1>
                 <p className='text-sm text-grey-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis molestiae, fugit dolorem debitis alias quo illum deserunt maiores ab temporibus.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant ="ghost"> 6 Vacancies</Badge>
        <Badge  className={'text-[#F83002] font-bold'} variant ="ghost"> part Time </Badge>
        <Badge  className={'text-[#7209b7] font-bold'} variant ="ghost"> 24LPA </Badge>


      </div>
     <div className='flex items-center gap-4 mt-4'>
        <Button  onClick={()=> navigate(`/description/${jobId}`)}  className="  bg- text-white bg-black hover:bg-gray-800">Details</Button>
        <Button  className=" bg- text-white bg-black hover:bg-gray-800">Save for later</Button>
     </div>

    </div>
  )
}

export default Job