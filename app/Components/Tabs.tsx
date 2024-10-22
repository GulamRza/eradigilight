"use client";

import React, { Children, ReactElement, ReactNode, useState } from 'react'

export function Tab({ children, name }: {
    children : ReactNode,
    name: string
}){
    return children;
}

function Tabs({children} : {
    children: ReactNode
}) {

  const tabs: any[] = Children.toArray(children);
  const [activeTab, setActiveTab] = useState(tabs[0].props.name);

  return (
    <div>
        {/* List Of Tabs */}
        <div className='border-b flex flex-col lg:flex-row '>
            {tabs.map((child:any) => (
                child.props.name && 
                <div 
                    key={child.props.name}
                    className={`p-4 text-center lg:text-lg flex-grow cursor-pointer ${child.props.name == activeTab ? "border-black border-b" : ""}`}
                    onClick={(e) => {setActiveTab(child.props.name);}}
                >
                    {child.props.name}
                </div>
            ))}
        </div>
        {/* Content For Active Tab */}
        <div className='p-4 min-h-40'>
            {tabs.find(tab => tab.props.name == activeTab)}
        </div>
    </div>
  )
}



export default Tabs

