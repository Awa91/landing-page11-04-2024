import React, { ReactNode } from "react";

//

type HeroData = {
            title: string;
            subtitle: string;
            description: string;
            avatar: ReactNode;
            
            quantifier: string;
            figure: string;
            statement: string;
          
            img: string;
            imgLabel: string;
            card: ReactNode;
      
        alternate: boolean


}

export const Hero = React.memo((props: HeroData) => {
    const {title, subtitle, description,avatar, img,imgLabel, quantifier,figure,statement, card,alternate,       } = props;
    const row = "lg:items-center lg:flex lg:flex-row lg:justify-end";
    const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center";
   

    return (<>
   
        <div className={` rounded-3xl bg-light dark:bg-dark pt-10 font-poppins sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0  ${alternate ? row : rowReverse} `} style={{position: "relative",marginTop:"12%",
            backgroundSize: 'cover',
            backgroundPosition: 'center',

        }} >
      
            <div className="lg:w-2/6 lg:-ml-20 lg:-mt-10  lg:flex lg:flex-col lg:justify-center lg:items-start m-1">
                <p className=" pb-5 pl-5 sm:pl-5 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0  text-2xl font-semibold text-start  dark:text-contrast text-contrast lg:pb-0 lg:-mb-3 lg:text-lg lg:font-bold  lg:text-left">{title}</p>
                <p className="p-5  text-3xl font-bold  text-start m-0 text-light dark:text-dark tracking-widest leading-relaxed lg:pb-4 lg:text-5xl lg:pl-0 mt-5  lg:p-5 lg:font-bold lg:text-left">{subtitle}</p>
                <p className="p-5 m-2 text-2xl leading-10 tracking-widest  text-start  text-light dark:text-dark  lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0">{description}</p>
                <div>
                    {avatar}
                </div>
                <p className="p-5 m-2  text-xl leading-10 text-start text-light dark:text-dark lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0">
                    {quantifier} <strong className="text-contrast leading-10 tracking-wide text-xl">{figure}+</strong> {statement}
                </p>

            </div>
            <div className="ml-10 lg:ml-0 lg:w-3/6 flex">
                <img className=" lg:-mt-24 lg:-mb-20 " src={img} alt={imgLabel} />
                <div className="-ml-80 mt-40">
                    {card}
                </div>
             
            </div>
        </div>

    </>);

});
