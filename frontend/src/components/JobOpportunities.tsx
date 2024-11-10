import React,{useState, FC, ReactNode} from "react";
import { Job, customerServiceData } from "./Demo";

type TabsProps = {
    tabs: {
      //label: string;
      label: ReactNode;
      index: number;
      numberOfOpening?: number;
      Component: FC<{ index: number }>;
    }[];
   
    selectedTab: number;
    onClick: (index: number) => void;
    orientation?: "horizontal" | "vertical";
    className?: string;
  };
  
  /**
   * Avalible Props
   * @param className string
   * @param tab Array of object
   * @param selectedTab number
   * @param onClick Function to set the active tab
   * @param orientation Tab orientation Vertical | Horizontal
   */
  const Tabs: FC<TabsProps> = ({
    className = "tabs-component",
    tabs = [],
    selectedTab = 0,
    onClick,
    orientation = "vertical"
  }) => {
    const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

   
  
    return (
      <div
        className={
          orientation === "vertical" ? className + " vertical" : className
        }
      >
        <div role="tablist" aria-orientation={orientation} className="bg-light dark:bg-dark
         sm:mx-32 md:mx-36 lg:mx-28 xl:mx-32 2xl:mx-64">
          {tabs.map((tab) => (
            <div
              //className={selectedTab === tab.index ? "active  " : ""}
              className={`bg-light dark:bg-dark text-light dark:text-dark p-2
                 font-poppins  ${selectedTab === tab.index ? 'active' : ''  }`}


              onClick={() => onClick(tab.index)}
              key={tab.index}
              //type="button"
              role="tab"
              aria-selected={selectedTab === tab.index}
              aria-controls={`tabpanel-${tab.index}`}
              tabIndex={selectedTab === tab.index ? 0 : -1}
              id={`btn-${tab.index}`}
              style={{backgroundColor:'', }}
              
            >
              {tab.label}
              {/* <span className="inline-flex items-center justify-center p-2 mt-3 text-sm font-medium
               text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-700
                dark:text-gray-300">{tab.numberOfOpening}</span> */}
             

            </div>
          ))}
        </div>
        <div
          role="tabpanel"
          aria-labelledby={`btn-${selectedTab}`}
          id={`tabpanel-${selectedTab}`}
         // className="sm:ml-40 lg:ml-[460px]"
         className=" "
          
        >
          {Panel && <Panel.Component index={selectedTab} />}
        </div>
      </div>
    );
  };



  type JobOpportuniesProps = {
    label: ReactNode;
    index: number;
    //numberOfOpening?: number;
    Component: React.FC<{}>;
  }[];

type JobOpeningLabelProps = {
   label: string,
   data: {
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
}[],
   color: string
}

const JobOpeningLabel = React.memo((props: JobOpeningLabelProps) => {
   const {label, data, color} = props;
const numOfOpening = data.length;

    return (<>
   <div className="flex">
<p>{label}</p>
<p className="rounded-xl " style={{background: color}}>
        {numOfOpening}
    </p>
   </div>
    </>);
  
  });

const DemoLabel = React.memo(()=>{
    return(
        <JobOpeningLabel label="Demo label" data={customerServiceData}
        color="#ffffff"/>
    )
})

const DemoJob  = React.memo (()=>{
    return(<>
    <Job jobs={customerServiceData}/>
    </>)
})

//Tabs Array
const tabs: JobOpportuniesProps =[

    {
        label: <DemoLabel/>,
        index: 0,
        Component:DemoJob
    },
    {
        label: <DemoLabel/>,
        index: 0,
        Component:DemoJob
    },
    {
        label: <DemoLabel/>,
        index: 0,
        Component:DemoJob
    },
] 


export const JobOps = React.memo(() => {
    const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

    return (<>
     <div className="mt-10 relative    max-w-[85rem]  
     
     
     px-4 py-40 sm:px-10 md:px-14 lg:px-20 xl:px-28
      2xl:px-36 mx-auto  ">
     
     <br />
     <p className=" font-bold font-poppins  text-light text-2xl tracking-wider mb-5 dark:text-dark bg-light
      dark:bg-dark"><strong className="text-contrast text-2xl tracking-wide">Latest</strong> Job Opportunities</p>
     <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
   </div></>);
  
  });
