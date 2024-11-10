import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";



type CardProps = {
    statistics: string;
    
    description: string;
}


export const Card = React.memo(( props:CardProps) => {
    const {statistics, description} = props;

    return (
        <div className=" p-3 h-28 bg-light 
        border border-gray-200 rounded-lg 
        shadow dark:bg-gray-800
         dark:border-gray-700
         w-32   relative -mt-2 ml-48 ">
           <p className="mb-2 ml-0 flex text-xl font-semibold tracking-tight text-gray-900
            dark:text-white">{statistics}K <span className=""><HeroCardIcon/></span> </p>
   
           <p className="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">{description}</p>   
       </div>
    );
});



const HeroCardIcon = React.memo(() => {
    return (<>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6D4C41"  className="bi bi-briefcase-fill ml-4 mt-2" viewBox="0 0 16 16">
    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
  </svg></>);
  
  });

export const heroCardData = {
    statistics:"30k+",
    icon:<HeroCardIcon/>,
    description:"People got hired",
}




// type CardProps = {
//     statistics: string;
//     icon: ReactNode;
//     description: string;
// }


// export const Card = React.memo(({ items }: { items: CardProps }) => {
//     return (
//         <div className=" p-3 h-28 bg-light 
//         border border-gray-200 rounded-lg 
//         shadow dark:bg-gray-800
//          dark:border-gray-700
//          w-32   relative -mt-2 ml-48 ">
//            <p className="mb-2 ml-0 flex text-2xl font-semibold tracking-tight text-gray-900
//             dark:text-white">{items.statistics} <span className="">{items.icon}</span> </p>
//            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{items.description}</p>   
//        </div>
//     );
// });



// export const Card = React.memo(() => {
//     const {t} = useTranslation();

//     return (
//         <div className=" p-3 h-28 bg-light 
//         border border-gray-200 rounded-lg 
//         shadow dark:bg-gray-800
//          dark:border-gray-700
//          w-32   relative -mt-2 ml-48 ">
//            <p className="mb-2 ml-0 flex text-2xl font-semibold tracking-tight text-gray-900
//             dark:text-white">{t('col1.subtitle')} <span className=""><HeroCardIcon/></span> </p>
//            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{t('col1.title')}</p>   
//        </div>
//     );
// });
