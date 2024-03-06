import React, { useEffect, useState } from "react";
import BitcoinImage from "../Assets/bitcoin.svg";
import axios from "axios";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import TradingViewWidget from "./TradingViewWidget";

const API = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"

const Bitcoin = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {

        setLoading(true);
        // const response = await fetch(API);

        // console.log(response);
        // setData(JSON.parse(response));

        const response = await axios.get(API);

        console.log(response.data.bitcoin);

        setData(response.data.bitcoin);

        console.log(data);

        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);


    if(loading || data==null) {
        return(
            <div className="flex justify-center items-center h-[100vh] w-[100vw]">
                Loading ...
            </div>
        );
    }

    return(
        <div className="bg-[#ffffff] p-6 rounded-lg">
            {/* Name Div */}
            <div className="flex gap-10 items-center pb-2">
                <div className="flex gap-2 items-center  ">
                    <div>
                        <img src={BitcoinImage} alt="Bitcoin Logo" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <h1 className="font-bold text-xl">
                            Bitcoin
                        </h1>
                        <p className="text-[#5D667B] font-medium">
                            BTC
                        </p>
                    </div>
                </div>
                <div className="px-4 py-2 bg-[#808A9D] rounded-lg text-white font-medium">
                    Rank #1
                </div>
            </div>

            {/* Price Div */}
            <div className="flex items-start gap-12 py-4 pb-8">
                {/* Price */}
                <div>
                    <div className="flex justify-center gap-14">
                        <p className="text-[#0B1426] font-bold text-4xl">
                            $ { data.usd } 
                        </p>

                        {/* 24h Change Data */}
                        <div className="flex items-center gap-6">
                            <div className={` ${Math.round(data?.usd_24h_change*100)/100 < 0 ? "bg-[#EE68551A] text-[#E96975]" : "bg-[#EBF9F4] text-[#14B079]"} flex items-center justify-center gap-2 px-2 py-[0.1rem] rounded-md`}>
                                {
                                    Math.round(data?.usd_24h_change*100)/100 >= 0 ? (<BiSolidUpArrow fontSize={12} />) : (<BiSolidDownArrow fontSize={12}/>)
                                }
                                <div className="flex">
                                    {/* 2.51% */}
                                    {
                                        Math.round(data?.usd_24h_change*100)/100
                                    }
                                </div>
                            </div>
                            <p>
                                (24H)
                            </p>
                        </div>
                    </div>
                    <p className="text-[#0B1426] font-semibold text-xl">
                        ₹ { data.inr }
                    </p>
                </div>
            </div>

            <hr/>

            {/* Days Div */}
            <div className="flex flex-col lg:flex-row justify-between text-[#5D667B] text-sm py-6">
                <p className="text-[#0B1426] font-bold text-lg">
                    Bitcoin Price Chart (USD)
                </p>
                <div className="flex gap-3 items-center">
                    <div className="cursor-pointer">
                        1H
                    </div>
                    <div className="cursor-pointer">
                        24H
                    </div>
                    <div className="bg-[#E2ECFE] text-[#0141CF] px-3 rounded-full cursor-pointer">
                        7D
                    </div>
                    <div className="cursor-pointer">
                        1M
                    </div>
                    <div className="cursor-pointer">
                        3M
                    </div>
                    <div className="cursor-pointer">
                        6M
                    </div>
                    <div className="cursor-pointer">
                       1Y 
                    </div>
                    <div className="cursor-pointer">
                        ALL
                    </div>
                </div>
            </div>

            {/* Graph */}
            {/* <BitcoinGraph /> */}
            <TradingViewWidget/>
        </div>
    );
}

export default Bitcoin;