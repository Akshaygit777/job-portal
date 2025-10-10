import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Navbar from "../shared/Navbar";
import { Description } from "@radix-ui/react-dialog";

const PostJob = () => {
    const [input,setInput] = useState({
        title:"",
        description:"",
        requirments:"",
        salary:"",
        location:"",
        jobType:"",
        experiance:"",
        position:0,
        companyId:"",

    });
    const changeEventHandler = (e)=>{
        setInput({...input,[e.target.name]:e.target.value});
    };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-screen my-5">
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            name="title"
            value={input.title}
            onChange={changeEventHandler}
            className="focus-visible:ring-offaset-0 focus-visible:ring-0 my-1"
          />
        </div>
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            name="title"
            value={input.title}
            onChange={changeEventHandler}
            className="focus-visible:ring-offaset-0 focus-visible:ring-0 my-1"
          />
        </div>
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            name="title"
            value={input.title}
            onChange={changeEventHandler}
            className="focus-visible:ring-offaset-0 focus-visible:ring-0 my-1"
          />
        </div>
        
      </div>
    </div>
  );
};

export default PostJob;
