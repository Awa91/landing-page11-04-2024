import React, {} from "react";


export  const Bar3 = React.memo(() => {
    const strokeColor: string = "#87CEEB";
    const strokeWidth: string = "1.5";
    const strokeSize: string = "size-6";
    return (<>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} className={strokeSize}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
    </>);
  
  });