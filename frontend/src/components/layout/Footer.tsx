import React, { ReactNode } from "react";
import { SendIcon } from "./SendIcon";
// Footer section
type MediaItem = {
  icon: ReactNode;

  link: string;
}
type FooterItem = {
  titles: string;
  descriptions: { id: number; name: string; url: string }[];
}


export const Footer = React.memo(({ items, media }: { items: Array<FooterItem>, media: Array<MediaItem> }) => {


  return (<>

    <div className=" w-full -pt-1 bg-light dark:bg-dark    px-2 relative sm:pl-10 sm:pr-10 
    md:pl-16 md:pr-16 lg:pr-52 lg:pl-52 xl:pl-64 xl:pr-64 2xl:pl-80 2xl:pr-80 pt-12  ">
      {/* <hr /> */}

      {/* Grid with 4 cols footer section */}

      {/*   Grid  */}
      <div className="w-full font-poppins  ml-10   grid  sm:grid-cols-2   md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-0  " >
        {/* Col 1 - 3 */}

        {items.map((footer) => (
          <div key={footer.titles} className="">
            <h6 className=" uppercase pt-2  text-light dark:text-dark tracking-wider   font-bold text-sm">{footer.titles}</h6>
            <div className="">
              {footer.descriptions.map((item, index) => (
                <div key={index}>
                  <a href={item.url} className="py-1 text-sm dark:text-dark  hover:text-button  
               font-poppins font-light  tracking-wide flex">{item.name}</a>
                </div>
              ))}
            </div>
          </div>
        ))}


        {/*  End Col 1 -3 */}

        {/* Col 4 */}
        <div className=" w-full ">
          {/* subscribtion form */}
          <div className="col-span-2 font-poppins  w-[100px]">

            <p className=" uppercase pt-2  text-light dark:text-dark  tracking-wider  font-bold text-sm">
              Subscribe     </p>
            <form
              className="
     flex flex-col justify-center 
     sm:flex-row xs:flex-row 
     md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mx-20
     
     "
            >
              <input
                className="ml-20  w-268 2xl:w-96 h-12  p-2 mt-4  mb-2 mr-10 text-light
          dark:text-dark tracking-wide font-light
          rounded-md  bg-subscription"
                type="email"
                placeholder="Enter email.."
              />
              <div className="absolute -mr-52
    8 mt-8">
                <SendIcon />
              </div>
              {/* <button className="p-2 mb-4 bg-input text-description text-sm font-light rounded-md">Subscribe</button> */}
            </form>
            <p className="py-1  w-60 justify-center text-light dark:text-dark tracking-wide text-sm font-light">
              Join our newsletter to stay up to date on features and releases     </p>
          </div>

        </div>
        {/* End Col 4 */}
      </div>
      {/*  End Grid  */}


      {/* End grid */}






      {/* Social Handle */}
      <div className="flex  max-w-[1240px] px-2 py-4 mx-auto     text-center text-light dark:text-dark">

        <div className="flex    pt-4 ">
          <p className="py-4 text-xs text-light dark:text-dark font-poppins font-sm "> {"Copyright © "} {new Date().getFullYear()} Awa91
            {"."}All Rights Reserved.</p>
          <a href="/privacy_policy">  <p className="py-4 text-xs font-poppins font-sm text-light dark:text-dark mx-4">Privacy Policy
          </p></a>
          <a href="/terms_of_service">  <p className="py-4 text-xs font-poppins font-sm text-light dark:text-dark mx-4"> Terms of Service
          </p></a>
          {media.map((x, index) => {
            return <ul key={index}><li className="m-0 pr-0 "><a href={x.link} > <p
              className="mx-0 text-[#0146B1] "

            >{x.icon}</p></a></li></ul>;
          })}
        </div>
      </div>
    </div>
  </>);

});