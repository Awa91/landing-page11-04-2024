import React,{} from "react"




export const StackedAvatar = React.memo(() => {
    return (<>
    <div className="flex -space-x-4 rtl:space-x-reverse">
    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/assets/img/hh5.png" alt=""/>
    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/assets/img/hh5.png" alt=""/>
    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/assets/img/hh5.png" alt=""/>
    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/assets/img/hh5.png" alt=""/>
</div>
    </>);
  
  });
