
import React, { useState } from 'react'
import { Label } from './ui/label'
import { Dialog ,DialogTitle,DialogContent,DialogHeader, DialogFooter} from './ui/dialog'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useSelector } from 'react-redux'

const UpdateProfileDialog = ({open,setOpen}) => {
  const [loading,setLoading] = useState(false);
  const {user} = useSelector(store=>store.auth);
  const [input,setInput]=useState({
    fullname:user?.fullname,
    email:user?.email,
    phoneNumber:user?.phoneNumber,
    bio:user?.profile?.bio,
    skills:user?.profile?.skills?.map(skill=>skill),
    file:user?.profile?.resume
  });

  return (
    <div >
      <Dialog open ={open}>
        <DialogContent className=" sm:max-w-[425px] bg-white text-black shadow-lg rounded-md"onInteractOutside={() => setOpen(false)}>
          <DialogHeader>
            <DialogTitle className="text-black">Update Profile</DialogTitle>
          </DialogHeader>
          <form>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor="name" className="text-right text-black">Name</Label>
            <Input
            id="name"
            name="name"
            value={input.fullname}
            className="col-span-3"
            />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor="email" className="text-right text-black">Email</Label>
            <Input
            id="email"
            name="email"
            value={input.email}
            className="col-span-3"
            />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor="number" className="text-right text-black">Number</Label>
            <Input
            id="number"
            name="number"
            value={input.phoneNumber}
            className="col-span-3"
            />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor="bio" className="text-right text-black">Bio</Label>
            <Input
            id="bio"
            name="bio"
            value={input.bio}
            className="col-span-3"
            />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor="Skills" className="text-right text-black">Skills</Label>
            <Input
            id="Skills"
            name="Skills"
            value={input.skills}
            className="col-span-3"
            />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor="resume" className="text-right text-black">Resume</Label>
            <Input
            id="file"
            name="file"
            type="file"
            accept="application/pdf"
            className="col-span-3"
            />
              </div>
            
            </div>
            <DialogFooter>
          {loading ? 
                   <Button disabled className="flex w-full my-4 bg-black text-white">
                     <Loader2 className="mr-2 h-5 w-4 animate-spin"/>
                     Please wait
                   </Button>
                  : (
                   <Button type="submit" className="w-full my-4 bg-black text-white">
                     Update
                   </Button>
                 )}
            </DialogFooter>
          </form>
        </DialogContent>

      </Dialog>
    </div>
  )
}

export default UpdateProfileDialog