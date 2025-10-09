import React, { useEffect } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useState } from "react";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "@/Hooks/useGetAllAdminJobs";
import { setsearchJobByText } from "@/redux/jobSlice";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input,setInput] = useState("");
    const navigate= useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(setsearchJobByText(input));
    },[input]);
  return (
    <div>
      <Navbar />
      <div className="  max-w-6xl mx-auto my-10 ">
        <div className=" flex items-center justify-between my-5">
          {" "}
          <Input className="w-fit" placeholder="filter by name" 
          onChange = {(e)=> setInput(e.target.value)}
          />
          <Button className="bg-black text-white" onClick={()=> navigate("/admin/jobs/create")}>New Jobs</Button>
        </div>
      <AdminJobsTable/>
      </div>
    </div>
  );
};

export default AdminJobs;
