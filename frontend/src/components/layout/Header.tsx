import React, { useState, useCallback } from "react";
import { Bar3 } from "./Bar3";
import { Cancel } from "./Cancel";


interface HeaderProps {
    sections: ReadonlyArray<{
        title: string;
        url: string;
    }>;
    mobileMenuSections: ReadonlyArray<{
        title: string;
        url: string;
    }>;
    logo: string;
    title: string;
    logoLabel: string;
    
    
}


export const Header = React.memo((props: HeaderProps) => {
    const { sections, logo, logoLabel, title,  mobileMenuSections } = props;
    const [isMobileDevice, setMobileMenu] = useState<boolean>(false);
    const showMobileMenu = () => setMobileMenu(!isMobileDevice);
    const memoizedShowMobileMenu = useCallback(showMobileMenu, [isMobileDevice])
     //Gotham8
   const headerBgColor: string = "linear-gradient(to right bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))";
    
    return (<>
     {/* Navigation bar on large screen */}
     <div style={{
        //background: headerBgColor
        }} className={`w-screen   bg-light dark:bg-dark   h-[70px] -inset-0  z-10 fixed drop-shadow-lg  font-poppins`}>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                {/*   Grid with 2 cols */}
                <div className="w-full     grid  sm:grid-cols-1   md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-0  " >
                    {/* Col 1 */}
                    <div className=" w-full  ">
                       

                        {/* Grid for logo and company name */}
                        <div className="grid  sm:ml-6 md:ml-10 lg:ml-14 xl:ml-16 2xl:ml-20">
                            <div className="flex ">
                                <p className="font-satistfy mx-4 my-4 tracking-wider text-light dark:text-dark ">{title}</p>
                                <img src={logo} alt={logoLabel} className=" mx-4 my-2 h-[30px] w-[40px]  border-2 border-white rounded-full dark:border-gray-800" />
                            </div>
                        </div>
                        {/* End grid */}

                    </div>
                    {/*  End Col 1 */}
                    {/* Col 2 */}
                    <div className=" w-full sm:hidden md:hidden hidden lg:flex xl:flex 2xl:flex">
                        {/* Grid menu section */}
                        <div className="grid ">
                            <div className="flex ">
                                <ul >
                                    <li className='cursor-pointer'>
                                        {sections.map((section, index) => (
                                            <a href={section.url} key={index} className="mx-4 my-4 space-x-4 font-poppins text-sm text-light dark:text-dark" aria-current="page">
                                                {section.title}
                                            </a>
                                        ))}
                                        <a href="/sign-in" className=" ml-4   text-primary dark:text-primary  hover:rounded-lg  w-16  font-sm p-2 font-poppins text-center text-sm">
                                            Log In
                                        </a>
                                        <a href="/sign_up" className="p-2  hover:bg-secondary   text-light dark:text-dark font-poppins font-sm dark:bg-primary  bg-primary  rounded-lg hover:rounded-xl  w-16 text-center ml-3">
                                            Sign Up
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* End section */}
                    </div>
                    {/* End Col 2 */}

                  
                </div>
                {/*  End Grid  */}
                <div className=' lg:hidden xl:hidden 2xl:hidden mr-4' onClick={memoizedShowMobileMenu}>
                    {!isMobileDevice ?
                        <Bar3/>
                        : <div className='flex'>
                            <span className="sr-only">Open user menu</span>
                           <Cancel/>
                        </div>}
                </div>
            </div>
            {/* Navigation on small screens */}
            <ul className={!isMobileDevice ? 'hidden' : 'absolute bg-light dark:bg-dark w-full -mt-2  lg:hidden xl:hidden 2xl:hidden'}>
                <li className=' w-full'>
                    {mobileMenuSections.map((section, index) => (
                        <a href={section.url} key={index} className="block py-2  pl-2 font-poppins tracking-wider  text-sm text-light dark:text-dark rounded bg-light dark:bg-dark  hover:bg-primary  hover:text-secondary hover:rounded-lg" aria-current="page">
                            {section.title}
                        </a>
                    ))}
                </li>
            </ul>
        </div>
        
    </>);

});



















{/**
    
//     {/* Navigation bar on large screen */}
//     <nav className="w-full p-2 mt-0">
//     {/* fixed */}
//     <div className='w-screen bg-light  h-[70px] -inset-0  z-10  drop-shadow-lg dark:bg-dark font-poppins'>
//         {/* w-full */}
//         <div className='px-2 flex justify-between items-center  h-full'>
//             {/*   Grid with 2 cols  w-full  */}
//             <div className="    grid  sm:grid-cols-1   md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-0  " >
//                 {/* Col 1  w-full */}
//                 <div className="   ">


//                     {/* Grid for logo and company name */}
//                     <div className="grid  sm:ml-6 md:ml-10 lg:ml-14 xl:ml-16 2xl:ml-20">
//                         <div className="flex ">
//                             <p className="font-satistfy mx-4 my-4 tracking-wider text-light dark:text-dark ">{title}</p>
//                             <img src={logo} alt={logoLabel} className=" mx-4 my-2 h-[30px] w-[40px]" />
//                         </div>
//                     </div>
//                     {/* End grid */}

//                 </div>
//                 {/*  End Col 1 */}
//                 {/* Col 2 */}
//                 <div className=" w-full hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
//                     {/* Grid menu section */}
//                     <div className="grid ">
//                         <div className="flex ">
//                             <ul >
//                                 <li className='cursor-pointer'>
//                                     {sections.map((section, index) => (
//                                         <a href={section.url} key={index} className="mx-4 my-4 space-x-4 font-poppins text-sm text-light dark:text-dark" aria-current="page">
//                                             {section.title}
//                                         </a>
//                                     ))}
//                                     <a href="/sign-in" className=" ml-4   text-primary dark:text-primary  hover:rounded-lg  w-16  font-sm p-2 font-poppins text-center text-sm">
//                                         Log In
//                                     </a>
//                                     <a href="/sign_up" className="p-2  hover:bg-secondary   text-light dark:text-dark font-poppins font-sm dark:bg-primary  bg-primary  rounded-lg hover:rounded-xl  w-16 text-center ml-3">
//                                         Sign Up
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     {/* End section */}
//                 </div>
//                 {/* End Col 2 */}


//             </div>
//             {/*  End Grid  */}
//             <div className=' lg:hidden xl:hidden 2xl:hidden mr-4' onClick={memoizedShowMobileMenu}>
//                 {!isMobileDevice ?
//                     <Bar3 />
//                     : <div className='flex'>
//                         <span className="sr-only">Open user menu</span>
//                         <Cancel />
//                     </div>}
//             </div>
//         </div>
//         {/* Navigation on small screens */}
//         <ul className={!isMobileDevice ? 'hidden' : 'absolute bg-light dark:bg-dark w-full -mt-2  lg:hidden xl:hidden 2xl:hidden'}>
//             <li className=' w-full'>
//                 {mobileMenuSections.map((section, index) => (
//                     <a href={section.url} key={index} className="block py-2  pl-2 font-poppins tracking-wider  text-sm text-light dark:text-dark rounded bg-light dark:bg-dark  hover:bg-primary  hover:text-secondary hover:rounded-lg" aria-current="page">
//                         {section.title}
//                     </a>
//                 ))}
//             </li>
//         </ul>
//     </div>
// </nav>
    
    
//     */}