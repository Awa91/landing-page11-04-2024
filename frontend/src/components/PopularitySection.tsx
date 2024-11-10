import React,{ReactNode} from "react";

type PopularitySectionProps = {
    grid: {
        col1:{
            title: string;
            description: string;
            card:{
             
                icon: ReactNode;
                title: string;
            }[]
        },
        col2:{
            bgImg: string;
            bgImgLabel: string;
          
        }
    }
    }


export const PopularitySection = React.memo((props: PopularitySectionProps) => {
    const {grid} = props;
    return (<>
    {/* Popularity Section */}
    <div className="relative max-w-[85rem] bg-light 
text-light dark:text-dark dark:bg-dark  
px-4 py-40 sm:px-10 md:px-14 lg:px-20 
xl:px-28 2xl:px-36  mx-auto ">
            <div className="max-w-5xl mx-auto ">
                {/* <!-- Grid --> */}
                <div className="grid justify-items-center font-poppins    sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 md:gap-12">
                  
                    <div className="font-bold  text-2xl  tracking-wider">{grid.col1.title}</div>
                    <div className="mt-6  text-md tracking-wide">
                            {grid.col1.description}
                        </div>
                    
                  
                    <div className="grid justify-items-center  mt-6  grid-cols-2  gap-6 ">
      {
            grid.col1.card.map((card, index)=>(
           
                 <div key={index} className="flex w-[180px] h-[50px]   rounded-md border-category dark:border-category 
                 border-2 p-2 text-sm  tracking-wide">
                   
                    <div className="dark:text-dark text-light">{card.icon}</div>
                    <div className="text-md tracking-wide">{card.title}</div>
               
               </div>
            ))
        }
      </div>
   
                   
                    {/* <!-- End Col --> */}

                    <div>
                       <div className="">
                       <img className=' h-[400.68px] w-[327.11px] ' src={grid.col2.bgImg} alt={grid.col2.bgImgLabel} />
                       
                       </div>
                      
                      
                    </div>
                    {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Grid --> */}
                <p className="text-light dark:text-dark text-xl font-poppins font-bold mt-20 tracking-widest leading-10">My Subtitle</p>
            </div>
        </div>
        {/* <!-- End Hero Section --> */}
        {/* <!-- End Popularity Section --> */}
   
    </>);
});



export const QualityIcon = React.memo(() => {
    return (<>
     <div className="bg-subscription dark:bg-primary p-1 rounded-md mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>

</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#cdcdcd" className="bi bi-check-circle ml-[3px] -mt-[15px] absolute" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
</svg>
              </div>
    </>);
  
  });

  export const CompanyIcon = React.memo(() => {
    return (<>
     <div className="bg-subscription dark:bg-primary p-1 rounded-md mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" className="bi bi-buildings-fill" viewBox="0 0 16 16">
  <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" className
="bi bi-people-fill -mt-1" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
                    </div></>);
  
  });


 export  const ChargeIcon = React.memo(() => {
    return (<> <div className="bg-subscription dark:bg-primary p-1 rounded-md mx-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>



        </div></>);
  
  });

 export  const JobIcon = React.memo(() => {
    return (<> <div className="bg-subscription dark:bg-primary p-1 rounded-md mx-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  className="bi bi-briefcase-fill" viewBox="0 0 16 16">
<path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
<path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#cdcdcd" className="size-3 -mt-[13px] ml-[2px]">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
</div></>);
  
  });


  export const popularitySectionData = {

    grid: {
        col1:{
            title: 'Why We are Most Popular',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non quis, modi reprehenderit neque vel explicabo, laborum doloribus quod eveniet dolorem excepturi possimus. Quae error quos alias ullam, magni inventore',
            card:[{
               
                icon: <QualityIcon/>,
                title: 'Quality Job'
            },
            {
                
                icon: <CompanyIcon/>,
                title: 'Top Companies'
            },{
               
                icon:<ChargeIcon/>,
                title: 'No Extra Charge'
            },
            {
             
                icon: <JobIcon/>,
                title: 'International Job'
            }]
        },
        col2:{
            bgImg: '/img/right side.png',
            bgImgLabel: '',
         
        }
    }
  }




    // {/* <!-- Popularity Section --> */}
    // <div className="relative max-w-[85rem]   mx-auto ">


    // <div className="max-w-full mx-auto ">
    //     {/* <!-- Grid --> */}
    //     <div className="grid justify-items-center sm:grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 md:gap-12">
    //         <div className="text-light dark:text-dark">
    //         <p className="mt-10 sm:mx-32 md:mx-36 lg:mx-28 xl:mx-32 2xl:mx-64 mb-4 text-2xl tracking-wide">{items.grid.col1.title}</p>
    //         <p className="sm:mx-32 md:mx-36 lg:mx-28 xl:mx-32 2xl:mx-64">{items.grid.col1.description}</p>
    
    //       <div className="grid justify-items-center  mt-6  grid-cols-2  gap-6 ">
    //       {
    //             items.grid.col1.card.map((card, index)=>(
    //                <div >
    //                  <div key={index}>
    //                     <img src={card.img} alt={card.imgLabel}/>
    //                     <p>{card.title}</p>
    //                 </div>  
    //                </div>
    //             ))
    //         }
    //       </div>
    //         </div>
    //         {/* <!-- End Col --> */}
    
    //         <div>
    //            <div className="">
    //            <img className=' h-[479.68px] w-[327.11px] object-contain mix-blend-overlay' src={items.grid.col2.bgImg} alt={items.grid.col2.bgImgLabel} />
               
    //            </div>
    //            {/* <div className="absolute -mt-80 ml-64 ">
    //             {items.grid.col2.card}
    //            </div>
    //            <img src={items.grid.col2.img1}  alt={items.grid.col2.img1Label} className="w-[327.11px] -mt-52  mix-blend-soft-light  "/>
    //             <img src={items.grid.col2.img2} alt={items.grid.col2.img2Label} className="h-7 w-7"/>
    //             <img src={items.grid.col2.img3} alt={items.grid.col2.img3Label} className="ml-72 -mt-8"/> */}
    //         </div>
    //         {/* <!-- End Col --> */}
    //     </div>
    //     {/* <!-- End Grid --> */}
    // </div>
    // </div>
    // {/* <!-- End Popularity Section --> */}