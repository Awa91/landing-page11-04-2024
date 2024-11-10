import { ReactElement, ReactNode } from "react";

export interface TabItemProps {
  label: string;
  numOfOpening?: number;
  children: ReactNode;
}

export interface TabListProps {
  activeTabIndex: number;
  children: ReactElement<TabItemProps> | ReactElement<TabItemProps>[];
  
}