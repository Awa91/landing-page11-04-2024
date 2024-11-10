import React from "react";
import { ReactElement, useState } from "react";
import TabItem from "./TabItem";
import { TabItemProps, TabListProps } from "./types/TabTypes";
import { sanitizeForId } from "./utils/stringUtils";


const TabList: React.FC<TabListProps> = ({ children, activeTabIndex = 0 }) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = React.Children.toArray(children).filter(
    (child): child is ReactElement<TabItemProps> =>
      React.isValidElement(child) && child.type === TabItem
  );

  return (
    //  {/* Unequal grid*/}
    <div className="tabs relative grid grid-cols-6 gap-1 mx-10
     
     lg:mx-64">
        {/* First column */}
    <div className="col-span-1 flex-col">
    <nav className="tab-nav ">
      <ul className="tab-list  flex-col" role="tablist" aria-orientation="horizontal">
        {tabs.map((tab, index) => (
          <li key={`tab-${index}`}>
            <button
              key={`tab-btn-${index}`}
              role="tab"
              id={`tab-${sanitizeForId(tab.props.label)}`}
              aria-controls={`panel-${sanitizeForId(tab.props.label)}`}
              aria-selected={activeTab === index}
              onClick={() => handleTabClick(index)}
              className={`tab-btn text-contrast  dark:text-contrast  text-center text-sm tracking-wide font-poppins p-2 truncate flex  ${
                activeTab === index && "tab-btn--active underline"
              }`}
            >
              {tab.props.label} <div className=" bg-red-950 rounded-lg text-xs p-1 w-7 text-yellow-200 ml-2">{tab.props.numOfOpening}</div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
    </div>
    {/* Second column */}
    <div className="col-span-5 ">
    {tabs[activeTab]}
    </div>
  </div>
   
  );
};

export default TabList;








