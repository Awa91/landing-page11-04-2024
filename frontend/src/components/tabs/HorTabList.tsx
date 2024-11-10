import React from "react";
import { ReactElement, useState } from "react";
import TabItem from "./TabItem";
import { TabItemProps, TabListProps } from "./types/TabTypes";
import { sanitizeForId } from "./utils/stringUtils";


export    const HorTabList: React.FC<TabListProps> = ({ children, activeTabIndex = 0 }) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = React.Children.toArray(children).filter(
    (child): child is ReactElement<TabItemProps> =>
      React.isValidElement(child) && child.type === TabItem
  );

  return (
    <div className="tabs relative font-poppins text-light dark:text-dark   bg-light dark:bg-dark"  style={{
      //backgroundImage: `url(${hh4})`,
      //Blue steel color
      //background: "linear-gradient(to top, rgb(156,163,175), rgb(75,85,99), rgb(30,64,175))",
      //backgroundSize: 'cover',
      //backgroundPosition: 'center',
      //position:"relative",
  
    }}>
      <nav className="tab-nav   ">
        <ul className="tab-list  flex justify-center " role="tablist" aria-orientation="horizontal">
          {tabs.map((tab, index) => (
            <li key={`tab-${index}`} className="">
              <button
                key={`tab-btn-${index}`}
                role="tab"
                id={`tab-${sanitizeForId(tab.props.label)}`}
                aria-controls={`panel-${sanitizeForId(tab.props.label)}`}
                aria-selected={activeTab === index}
                onClick={() => handleTabClick(index)}
                className={`tab-btn  truncate text-contrast dark:text-contrast text-sm p-4 m-4 ${
                  activeTab === index && "tab-btn--active underline  text-light dark:text-dark text-sm p-4 m-4"
                }`}
              >
                {tab.props.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
     <div className="px-5 mb-20 
     mx-10
     bg-light 
        border border-gray-200 rounded-lg 
        shadow dark:bg-gray-800
         dark:border-gray-700
     lg:mx-64
     ">
     {tabs[activeTab]}
     </div>
    </div>
  );
};

