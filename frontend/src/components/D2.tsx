import React, { ReactElement } from "react";


type TabProps = {
    children : string
}


const Tab : React.FC<TabProps> = ({children })=>{
    return <div> {children }</div>
}



type TitleProps = {
    title: string
}

const TabTitle : React.FC<TitleProps> = ({title})=>{

    return (
        <li>
            <button>{title}</button>
        </li>
    )
}


type TabsProps = {
    children: ReactElement[]
}

const Tabs : React.FC<TabsProps> = ({children})=>{
    return (
        <div>
            <ul>
                {children.map((item, index)=>(
                    <TabTitle key={index} title={item.props.title}/>
                ))}
            </ul>
            {children}
        </div>
    )
}




export 
const D2 = React.memo(() => {

    

  return (<>
  
            
    
  
  </>);

});