import TabItem from "./TabItem";
import TabList from "./TabList";
import { Job,customerServiceData } from "../Demo";

const numOfOpening: number = customerServiceData.length;
const tabData = [

    {
        label:"Ingredients",
        numberOfOpening: numOfOpening,
        content:<Job jobs={customerServiceData}/>
    },
    {
      label: "Nutritions",
      numberOfOpening: numOfOpening,
    content:<>
     <p className="text-light dark:text-dark ml-20 mx-40">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!
    </p>
    </>
    }, 
    {
      label: "Final Outcome",
      numberOfOpening: numOfOpening,
    content:<>
     <p className="text-light dark:text-dark ml-20 mx-40">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!
    </p>
    </>
    }, 
]



function Tab() {
  return (
   
    <div className="relative 
     
     
     ">
     
     <div className="flex overflow-auto">
     <TabList activeTabIndex={0} >


     {
            tabData.map((tab, index)=>(
              <TabItem key={index} label={tab.label} numOfOpening={numOfOpening}>
                {tab.content}
              </TabItem>
            ))
          }
      </TabList>
     </div>
    </div>
  );
}

export default Tab;






























