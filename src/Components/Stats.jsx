import React from "react";
import iTabIMage from "../Assets/iTab.svg";
import { statsData } from "../Data/StatsData";
import { BiSolidUpArrow } from "react-icons/bi";

const Stats = () => {
    return(
        <div className="bg-white p-6 flex flex-col gap-6 rounded-lg">
            <h1 className="text-3xl font-semibold"> 
                Performance
            </h1>

            <div className="flex justify-between items-center relative">
                <div className="flex flex-col gap-4 items-start">
                    <h2 className="text-[#44475B] text-sm">
                        Today's Low
                    </h2>
                    <p className="text-[#44475B] text-sm">
                        46,930.22
                    </p>
                </div>
                <div className="w-[70%] h-2 performance-gradient rounded-full "></div>
                <div className="flex flex-col items-center absolute -bottom-2 right-20 lg:-bottom-4 lg:right-60">
                    <BiSolidUpArrow />
                    <p>$48,637.83</p>
                </div>
                <div className="flex flex-col gap-4 items-end">
                    <h2 className="text-[#44475B] text-sm">
                        Today's High
                    </h2>
                    <p className="text-[#44475B] text-xm">
                        49,343.83
                    </p>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4 items-start">
                    <h2 className="text-[#44475B] text-sm">
                        52W Low
                    </h2>
                    <p className="text-[#44475B] text-sm">
                        16,930.22
                    </p>
                </div>
                <div className="w-[70%] h-2 performance-gradient rounded-full"></div>
                <div className="flex flex-col gap-4 items-end">
                    <h2 className="text-[#44475B] text-sm">
                        52W High
                    </h2>
                    <p className="text-[#44475B] text-sm">
                        49,743.83
                    </p>
                </div>
            </div>

            <div>
                <div className="flex gap-2 items-center">
                    <h2 className="text-[#44475B] font-semibold text-2xl">
                        Fundamentals 
                    </h2>
                    <div>
                        <img src={iTabIMage} alt="iTabImage" />
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col lg:flex-row gap-4 justify-between">
                {/* Left Stats Div */}
                <div className="lg:w-[45%]">
                    {
                        statsData[0].map((data) => (

                            <div key={data.id} className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <p className="text-[#768396] text-sm lg:text-base">
                                        {data.left}
                                    </p>
                                    <p className="font-semibold text-sm lg:text-base">
                                        {data.right}
                                    </p>
                                </div>
                                
                                <hr className="pb-4"/>
                            </div>
                        ))
                    }
                </div>

                {/* Right Stats Div */}
                <div className="lg:w-[45%]">
                    {
                        statsData[1].map((data) => (
                            <div key={data.id}  className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <p className="text-[#768396] text-sm lg:text-base">
                                        {data.left}
                                    </p>
                                    <p className="font-semibold text-sm lg:text-base">
                                        {data.right}
                                    </p>
                                </div>
                                <hr className="pb-4"/>
                            </div>
                        ))
                    }

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <p className="text-[#768396] text-sm lg:text-base">
                                All-Time High
                            </p>
                            <div className="flex flex-col justify-center items-end font-semibold">
                                <p className="text-sm">
                                    $69,044.77 <span className="text-[#F7324C]">-75.6%</span>
                                </p>
                                <p className="text-xs text-[#111827] font-normal">
                                    Nov 10, 2021 (about 1 year)
                                </p>
                            </div>
                        </div>

                        <hr className="pb-4"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <p className="text-[#768396] text-sm lg:text-base">
                                All-Time Low
                            </p>
                            <div className="flex flex-col justify-center items-end font-semibold">
                                <p className="text-sm">
                                    $67.81 <span className="text-[#0FBA83]">24729.1%</span>
                                </p>
                                <p className="text-xs text-[#111827] font-normal">
                                    Jul 06, 2013 (over 9 years)
                                </p>
                            </div>
                        </div>

                        <hr className="pb-4"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;