import { Application } from "../models/Application.model";
import { Job } from "../models/jobs/model";
export const applyJob=async (req,res) =>{
    try{
        const userId=req.id;
        const jobId=req.params.id;
        if(!jobId){
            return res.status(400).json({
                message:"job id ios required",
                success:false
            })
        };
       const existingApplication=await Application.findOne({job:jobId,applicant:userId});

       if(existingApplication){
        return res.status.json({
            message:"you have already applied for this job",
            success:false

        });
       }
       const job=await Job.findById(jobId);
       if(!job){
        return res.status(404).json({
            message:"job not found",
            success:false
        })
       }

    }catch(error){
        console.log(error);

    }
}