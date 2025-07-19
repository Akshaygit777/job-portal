import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = true;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Developer</h1>

          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              {" "}
              6 Vacancies
            </Badge>
            <Badge className={"text-[#F83002] font-bold"} variant="ghost">
              {" "}
              part Time{" "}
            </Badge>
            <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
              {" "}
              24LPA{" "}
            </Badge>
          </div>
        </div>

        <Button
          disabled={isApplied}
          className={`rounded-lg text-white ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5f32ad]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-400 font-medium py-4">Job Description</h1>
      <div className="my-4">
    <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">Frontend Developer</span></h1>
    <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">Noida</span></h1>
    <h1 className="font-bold my-1">description: <span className="pl-4 font-normal text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, explicabo sint numquam perspiciatis iusto excepturi.</span></h1>
    <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">12 LPA</span></h1>
    <h1 className="font-bold my-1">Total Applicant:<span className="pl-4 font-normal text-gray-800">4</span></h1>
    <h1 className="font-bold my-1">Posted Date:<span className="pl-4 font-normal text-gray-800">14-05-2025</span></h1>

--+
.



      </div>
    </div>
  );
};

export default JobDescription;
