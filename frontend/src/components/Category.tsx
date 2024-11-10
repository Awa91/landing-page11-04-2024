import React,{  } from "react";

type CategoryItem ={
    category:{
        title: string;
        card:{ title: string;  rating: string; skills: string;}[]
    }
}


export const Category = React.memo((props:CategoryItem) => {
    const { category}= props
    
    return (<>
     {/* <!-- Category Section --> */}
     <div className="mt-10 relative    max-w-[85rem]  
      px-4 py-40 sm:px-10 md:px-14 
      lg:px-20 xl:px-28 2xl:px-36 mx-auto">


<div className=" text-light dark:text-dark max-w-5xl mx-auto">
    {/* sm:mx-32 md:mx-36 lg:mx-28 xl:mx-32 2xl:mx-64  */}
<p className="mt-10  font-bold

mb-4
 text-2xl tracking-wide">{category.title}</p>
    {/* <!-- Grid --> */}
    <div className="grid justify-items-center 
    sm:grid-cols-2 mt-6 md:grid-cols-2 
     lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 
     gap-6 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20
      2xl:gap-24 ">
      
       {category.card.map((card, index)=>(
         <div key={index} className=" rounded-md 
         border-category dark:border-category
          dark:border-2 p-16 text-lg 
          shadow-2xl 
          dark:shadow-2xl
          tracking-wide">
         <p className="text-center">{card.title}</p>
         <p className="text-contrast text-center p-4 -mx-4">    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></p>
       
         <p className="absolute -mt-9 ml-10 ">{card.rating}</p>
         <p className="absolute -mt-9 ml-24">{card.skills}</p>
         </div>
       ))}
        {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}
</div>
</div>
{/* <!-- End Category Section --> */} 
    </>);
  });
