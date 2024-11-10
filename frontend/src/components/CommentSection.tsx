import React, { } from "react"

type CommentSectionProps = {
  title: string;
  description: string;
  carousel: {
    img: string;
    imgLabel: string;
    dotColour: string;
    description: string;
    name: string;
    jobTitle: string;
  }[]
}


export const CommentSection = React.memo(({ items }: { items: CommentSectionProps }) => {
 

  return (<>
  {/* Comment Section */}
  
    <div className=" mx-auto    max-w-[85rem]
    mt-[5px] sm:px-10 md:px-14 lg:px-20 
xl:px-28 2xl:px-40  relative font-poppins">
      
      <p className=" 
     mb-4 font-bold
       text-2xl tracking-wide">{items.title}</p>
      
      <p className="
       mb-4 
       text-md tracking-wide">{items.description}</p>
      <div className="w-full h-full relative">
        <div className="w-1/4 h-full relative z-50 left-0" style={{ background: 'linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
        <div className="w-1/4 h-full relative z-50 right-0" style={{ background: 'linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
      </div>

      <div className="carousel-items  flex items-center  justify-center " style={{ width: 'fit-content; animation: carouselAnim 10s infinite alternate linear' }}>
        {items.carousel.map((item, index) => (
          <div key={index} className="carousel-focus  flex font-poppins items-center flex-col relative 
          
          bg-secondary mx-5 my-10 px-4 py-3 rounded-2xl
           shadow-2xl" style={{ width: '270px', height: '300px' }}>
           
            <img className="w-[80px] h-[80px] rounded-full" src={item.img} alt={item.imgLabel} />
            <span className="bottom-0 left-7 absolute  w-4 h-4 ml-[54px] p-3 mb-[200px] dark:border-gray-800 rounded-full" style={{backgroundColor: `${item.dotColour}`}}></span>
          
             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#ffffff" className="bi bi-quote rotate-180 ml-[42px]  absolute mt-[68px]" viewBox="0 0 16 16">
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
            </svg>
            <span className={`bottom-0 left-7 absolute  w-4 h-4 ml-5 p-3 bg-${[item.dotColour]} dark:border-gray-800 rounded-full  `}></span>
            <p className="mt-3 text-description font-extralight text-center text-sm">{item.description}</p>
           
            <span className="bottom-0 left-7 absolute  w-3 h-3 ml-[34px] p-1 mb-[100px] dark:border-gray-800 rounded-full" style={{backgroundColor: `${item.dotColour}`}}></span>
            <span className="text-primary font-light text-sm mb-3 mt-5">{item.name}</span>
            <span className="text-primary font-light text-sm mb-3">{item.jobTitle}</span>

          </div>
        ))}
      </div>
    </div>
  </>);
});



export const commentSectionData = {
  title: "Client's comments",
  description: "Lorem ipsum dolor tatis ipsum dolor sit, amet consectetur adipisicing elit. Odio sunt veritatis cupiditate non! Sit asperiores rem, vel reprehenderit et fugiat voluptatum expedita ipsam? Praesentium, tempora iste? Pariatur dignissimos sin ",
  carousel:[
    {
      img: "/img/removal.png",
      imgLabel:"",
      dotColour: '#00A79D',
      description: "Lorem ipsum Sit ita i iste? Pariatur dignissimos sint facere.",
      name:"Alex Jesse",
      jobTitle: "Developer",
    },
    {
      img: "/img/removal.png",
      imgLabel:"",
      dotColour: '#966AF5',
      description: "Lorem vetium, tempora iste? Pariatur dignissimos sint facere.",
      name:"Alex Jesse",
      jobTitle: "Developer",
    },
    {
      img: "/img/removal.png",
      imgLabel:"",
      dotColour: '#FCA326',
      description: "Lorem ipveriehenr dignissimos sint facere.",
      name:"Alex Jesse",
      jobTitle: "Developer",
    },
    {
      img: "/img/removal.png",
      imgLabel:"",
      dotColour: '#000000',
      description: "Lorem Odio su, tempora iste? Pariatur dignissimos sint facere.",
      name:"Alex Jesse",
      jobTitle: "Developer",
    },
    {
      img: "/img/removal.png",
      imgLabel:"",
      dotColour: '#000000',
      description: "Lorem t facere.",
      name:"Alex Jesse",
      jobTitle: "Developer",
    }, {
      img: "/img/removal.png",
      imgLabel:"",
      dotColour: '#000000',
      description: "Lor Pariatur dignissimos sint facere.",
      name:"Alex Jesse",
      jobTitle: "Developer",
    }
  ]
}