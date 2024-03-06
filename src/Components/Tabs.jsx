import React, { useState } from "react";

const TAB = [
    "Overview", 
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
]

const Tabs = () => {

    const [activeTab, setActiveTab] = useState(TAB[0]);

    return(
        <div className="py-6 flex flex-col gap-4 overflow-scroll tabs-scroll">
            <div className="flex gap-6 border-b-2 py-4">
                {
                    TAB.map((tabs, index) => (
                        <div  key={index} className="relative">
                            <div className={`${tabs === activeTab ? "text-[#0141CF]" : "text-[#3E424A]"} font-semibold text-lg cursor-pointer`} onClick={() => setActiveTab(tabs)}>
                                {tabs}
                            </div>
                            <div className={`${tabs === activeTab ? "block" : "hidden"} absolute bottom-[-1rem] w-full h-1 bg-[#0141CF]`}></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Tabs;