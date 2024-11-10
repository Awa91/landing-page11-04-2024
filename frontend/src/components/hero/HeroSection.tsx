import React, { ReactNode } from "react";

type HeroSectionProps = {
    grid: {
        col1: {
            title: string;
            subtitle: string;
            description: string;
            avatar: ReactNode;
            statistics: string;
        },
        col2: {
            img: string;
            imgLabel: string;
            card: ReactNode;
        }
    }
}

export const HeroSection = React.memo((props: HeroSectionProps) => {
    const { grid } = props;

    return (<>
        {/* <div className="m-0 mx-auto "> */}
            <div className="flex flex-col items-center mb-12 sm:flex-row sm:mb-24">
                {/*<!--Left Col-->*/}
                <div className="flex flex-col items-start justify-center  w-full px-6 pt-12 pb-24 lg:w-1/2 text-black">  <h1 className="font-bold  text-sm  tracking-wider">{grid.col1.title}</h1>
                    <h2 className="mt-6 text-start text-5xl sm:text-2xl  tracking-wide">
                        {grid.col1.subtitle}
                    </h2>
                    <div className="mt-6 tracking-wide text-xl ">{grid.col1.description}</div>
                  <div> 
                        {grid.col1.avatar}
                    </div>
                    <div className="mt-2 text-xl"> Over <strong className="text-contrast tracking-wide text-xl">12800+</strong> freelancers to complete your projects</div>
                </div>
                {/*<!--Right Col-->*/}
                <div className=" text-center  lg:w-1/2 lg:py-6">
                    <div className="">
                        <img className=' h-[400.68px]  lg:w-[327.11px] sm:w-[100px] ' src={grid.col2.img} alt={grid.col2.imgLabel} />
                        <div className="-ml-16 lg:ml-8"> {grid.col2.card}</div> 
                         <img src="/assets/img/object.png" alt="" className="w-[327.11px] mt-16  mix-blend-soft-light  " />
                        <img src="/assets/img/Portal.png" className="h-7 w-7" />
                        <img src="/assets/img/Portal.png" className="ml-72 -mt-8" />
                    </div>
                </div>
            </div>
        {/* </div> */}
    </>);

});