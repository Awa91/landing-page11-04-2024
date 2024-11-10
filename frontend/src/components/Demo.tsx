import React,{} from "react"
import { UsersIcon } from "./UsersIcon";

type JobProps = {
    
        jobs:{
            id: string,
            jobTitle: string,
            jobType: string,
            rank: string,
            salary: string,
            createdAt: string,
            companyLogo: string,
            companyLogoLabel: string,
            sourceSet: string,
            company: string,
            numOfStaffs: string,
            numOfJobs: number,
            color : string
        }[]
   
}



export    const Job = React.memo((props: JobProps) => {
    const {jobs} = props

    const imgBgColor: string ='#E5E4E2';
    
    return (<>
    {/*   Grid  */}
<div className=" relative pb-8    grid   justify-center  grid-flow-col overflow-x-auto  gap-3   font-poppins  ml-16 " >

{/* Col 1 */}

    {jobs.map((job)=>(
         <div key={job.id} className=" w-48  justify-center rounded-2xl " 
         style={{background: job.color}}>
            
            <div className="text-center tracking-wide font-medium text-lg mt-[10px]">{job.jobTitle} </div>
            {/* Job title and type grid */}
            <div className="grid grid-cols-2 p-[5px] px-5 ">
            <div className="text-xs mr-5 truncate tracking-tight bg-[#dfbb7e]
            text-center rounded-xl p-1">{job.jobType}</div>
            <div className="truncate text-xs tracking-tight bg-[#dfbb7e]
            text-center rounded-xl ml-5 p-1  ">{job.rank}</div>
            </div>
            {/* End grid */}
            <div className="text-center p-3 mb-4 text-lg tracking-widest">{job.salary}</div>
            {/* Divider and created at grid */}
            <div className="grid grid-cols-2 ">
            <div>
           <ul className=" pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700"></ul>
           
            </div>
            <div className="text-xs pt-2 ml-3 tracking-tight">{job.createdAt}</div>
            </div>
            {/* Grid End */}

            {/* Company logo, title and number of jobs grid */}
            <div className=" grid grid-cols-3">
                {/* Col1 */}
            <div>
                <img style={{background: imgBgColor}} className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={job.companyLogo} alt={job.companyLogoLabel} srcSet={job.sourceSet}/>
            </div>
            {/* End Col 1 */}
            {/* Col 2 */}
            <div>
                {/* Company title and number of employees grid */}
                <div className="grid grid-cols-1">
                <div className="text-sm tracking-tight ">{job.company}</div>
                <div className="flex text-[9px]">
                    <UsersIcon/>{job.numOfStaffs}
                </div>
                </div>
                {/* End grid */}
            </div>

            {/* End Col 2 */}
            {/* Col 3 */}
            <div className="bg-[#9c511cda] w-10 text-center rounded-xl h-6 ml-1 mt-4 text-[9px] p-1.5 ">{job.numOfJobs}</div>
            {/* End col 3 */}

            </div>
            {/* End Grid  */}

       
         </div>
    ))}
     
     
      
 


{/* End Col 1 */}
</div>
    
    
    </>);
  
  });




  
export const customerServiceData = [
    {
      id:"0",
      jobTitle: "Customer Service",
      jobType:"Full Time",
      rank: "Manager",
      salary:"#75k - #100k",
      createdAt:"1 hour ago",
      companyLogo:"./revomal.png",
      companyLogoLabel:".",
      sourceSet: "./revomal.png, ",
      company:"Gitlab",
      numOfStaffs:"1200-1300",
      numOfJobs:20,
      color:"linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195))"
    },
    {
      id:"1",
      jobTitle: "Senior Designer",
      jobType:"Full Time",
      rank: "Head of Design",
      salary:"#85k - #100k",
      createdAt:"4 hour ago",
      companyLogo:"./revomal.png",
      companyLogoLabel:".",
      sourceSet: "./revomal.png, ",
      company:"Hotjar",
      numOfStaffs:"140-300",
      numOfJobs:40,
      color:"linear-gradient(to right, rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99))"
    },
    {
      id:"2",
      jobTitle: "Creative Director",
      jobType:"Full Time",
      rank: "Designer",
      salary:"#175k - #200k",
      createdAt:"5 hour ago",
      companyLogo:"./revomal.png",
      companyLogoLabel:".",
      sourceSet: "./revomal.png, ",
      company:"Github",
      numOfStaffs:"6200-4000",
      numOfJobs:20,
      color:"linear-gradient(rgb(249, 115, 22), rgb(253, 224, 71))"
    },
    {
      id:"3",
      jobTitle: "Creative Director",
      jobType:"Full Time",
      rank: "Designer",
      salary:"#175k - #200k",
      createdAt:"5 hour ago",
      companyLogo:"./revomal.png",
      companyLogoLabel:".",
      sourceSet: "./revomal.png, ",
      company:"Github",
      numOfStaffs:"6200-4000",
      numOfJobs:20,
      color:"linear-gradient(to right bottom, #0038F0, #299DF2)"
    },
  ];
  