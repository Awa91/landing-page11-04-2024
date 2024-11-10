import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FacebookIcon } from "./components/layout/FacebookIcon";
import { WhatsAppIcon } from "./components/layout/WhatsAppIcon";
import { Xicon } from "./components/layout/Xicon";
import { IGicon } from "./components/layout/IGicon";
import { YouTubeIcon } from "./components/layout/YouTube";


const mediaData = [
  {
    icon: <FacebookIcon />, link: "https://www.facebook.com/"
  },
  {
    icon: <WhatsAppIcon />, link: "https://www.whatsapp.com/"
  },
  {
    icon: <Xicon />, link: "https://www.twitter.com/"
  },
  {
    icon: <IGicon />, link: "https://www.instagram.com/"
  },
  {
    icon: <YouTubeIcon />, link: "https://www.youtube.com/"
  },
];


const menuSections = [
  { title: " Find a Job", url: "/home" },
  { title: "Talents", url: "/freelancer" },
  { title: "Features", url: "/create-project" },
  { title: "About", url: "/gallery" },

];

const mobileMenuSections = [
  { title: " Find a Job", url: "/home" },
  { title: "Talents", url: "/freelancer" },
  { title: "Features", url: "/create-project" },
  { title: "About", url: "/gallery" },
  { title: "Login", url: "/sign-in" },
  { title: "Sign Up", url: "/sign_up" },


];

const footerData = [
  {
    titles: "Company",
    descriptions: [
      { id: 0, name: "Team", url: "/team" },
      { id: 1, name: "History", url: "/history" },
      { id: 2, name: "Contact us", url: "/contact" },
      { id: 3, name: "Location", url: "/location" },
    ],
  },
  {
    titles: "Products",
    descriptions: [
      { id: 0, name: "Cool stuff", url: "/cool-stuff" },
      { id: 1, name: "Random feature", url: "/random-feature" },
      { id: 2, name: "Team feature", url: "/team-feature" },
      { id: 3, name: "Developer stuff", url: "/developer-stuff" },
      { id: 4, name: "Another one", url: "/another-one" },
    ],
  },
  {
    titles: "Resources",
    descriptions: [
      { id: 0, name: "Resource", url: "/resource" },
      { id: 1, name: "Resource name", url: "/resource-name" },
      { id: 2, name: "Another resource", url: "/another-resource" },
      { id: 3, name: "Final resource", url: "/final-resource" },
    ],
  },


];

  

export const Layout = React.memo(() => {
   
  return (<>
    {/* <div className="box-border ">
      <div className="flex flex-col "> */}



    <div className="m-0 mx-auto antialiased bg-rose-300 2xl:container">
      <Header logo="/assets/img/logo.jpg" logoLabel="" title="" sections={menuSections}
        mobileMenuSections={mobileMenuSections}  />


      {/* </div> */}
      <Outlet />

      <Footer items={footerData} media={mediaData} />

    </div>





    {/* </div>
      </div>  */}
  </>);

});




const HoverableDropdown = React.memo(() => {
  return (<></>);

});



const UnequalGrid = React.memo(() => {
  return (<>
    {/* Unequal grid*/}
    <div className="grid grid-cols-6 gap-1">

      {/* First Column (10% width)  */}
      <div className="col-span-1 bg-red-600">

        Content


      </div>

      <div className="col-span-5 bg-blue-600">

        Content


      </div>

    </div>

  </>);

});


{/* 
  
  
  import { useTranslation } from "react-i18next";
  const {t} = useTranslation();
  
  
  
 
  var section = t('section', { returnObjects: true }) // Return the array from my local JSON file
  
  
  <div className="relative">
{
  section && 
  section.length > 0 &&
  section.map(item =>{
    return(
      <p key={item.title}>
        {item.title}
      </p>
    )
  })
}
</div> */}