import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const CompanyCreate = () => {
  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto'>
            <div>
                
            </div>
            <h1 className='font-bold text-2xl'>Your Company Name</h1>
        <p className='text-gray-500'>what would be the company name? You can chanage it later.</p>
         <Label>Company Name</Label>
         <Input
         type="text"
         className="my-2"
         placeHolder="JobHunt,Microsoft etc."/>
        </div>
    </div>
  )
}

export default CompanyCreate