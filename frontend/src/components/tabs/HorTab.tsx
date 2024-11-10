import React from "react";
import TabItem from "./TabItem";
import { HorTabList } from "./HorTabList";
import { customerServiceData } from "../Demo";


const numberOfOpening: number = customerServiceData.length;

const tabData = [
 
  {
    label: "Ingredients",
    numberOfOpening: numberOfOpening,
  content:<>
   <p className="text-light dark:text-dark p-4 m-4  text-normal
   tracking-wider font-poppins">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!

  </p>
  </>
  }, 
 
  
  {
    label: "Nutritions",
    numberOfOpening: numberOfOpening,
  content:<>
   <p className="text-light dark:text-dark  p-4 m-4 text-normal
   tracking-wider font-poppins">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!

  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!

  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!

  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!

  </p>
  </>
  }, 
  {
    label: "Final Outcome",
    numberOfOpening: numberOfOpening,
  content:<>
   <p className="text-light dark:text-dark  p-4 m-4 text-normal
   tracking-wider font-poppins">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!

  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!

  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla impedit reiciendis tempora, enim quam ducimus dicta eius voluptatibus, in dignissimos, nostrum ratione. Autem voluptas ullam cupiditate adipisci labore eos laborum!

  </p>
  </>
  }, 
]


export const HorTab = React.memo(() => {
    return (<>
      <div className="">
          <p>
            
          </p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, numquam fugiat deserunt accusamus atque sunt magnam, ipsam qui fugit optio a odio blanditiis consectetur asperiores alias aperiam accusantium doloremque expedita.
          <p>
            <a href="https://github.com/Awa91/">
              Check out the source here
            </a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam autem commodi repellendus perspiciatis, nisi debitis vero dolorum deserunt ipsa sit odit. Animi consequuntur reprehenderit, libero deleniti incidunt quam dolorum quaerat.
          </p>
         <div className="overflow-auto">
         <HorTabList activeTabIndex={0}>
          {
            tabData.map((tab, index)=>(
              <TabItem key={index} label={tab.label} numOfOpening={numberOfOpening}>
                {tab.content}
              </TabItem>
            ))
          }
           
          </HorTabList>
         </div>
        </div></>);
  
  });
