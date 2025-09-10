import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'
import axios from 'axios'

const CompanyCreate = () => {
 
  const navigate = useNavigate();
  const [companyName,setCompanyName] = useState();
  const [companyDescription, setCompanyDescription] = useState();
  const dispatch = useDispatch();
  const registerNewCompany= async() => {
    try{
const res = await axios.post(`${COMPANY_API_END_POINT}/register` ,{
  companyName,
  description: companyDescription
},{
  headers:{
    'Content-Type':'application/json'

  },
  withCredentials:true
});
if(res?.data?.success){
  dispatch(setSingleCompany(res.data.company));
  toast.success(res.data.message);
  const companyId = res?.data?.company?._id;
  navigate(`/admin/companies/${companyId}`);
}
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto'>
            <div className='my-10'>
            <h1 className='font-bold text-2xl'>Your Company Name</h1>
            <p className='text-gray-500'>what would be the company name? You can chanage it later.</p>
            </div>
         
         <Label>Company Name</Label>
         <Input
         type="text"
         className="my-2"
         placeholder="JobHunt,Microsoft etc."
         onChange={(e) => setCompanyName(e.target.value)}/>

         <Label className="mt-4">Company Description</Label>
         <Input
         type="text"
         className="my-2"
         placeholder="What does your company do?"
         onChange={(e) => setCompanyDescription(e.target.value)}/>

         <div className='flex items-center gap-2 my-10'>
          <Button className="hover:bg-gray-100" variant="outline" onClick={() => navigate("/admin/companies")}>Cancel</Button>
          <Button className="text-white bg-gray-700 hover:bg-black" onClick = {registerNewCompany}>Continue</Button>
         </div>
        </div>
    </div>
  )
}

export default CompanyCreate
