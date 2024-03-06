import React, { useEffect, useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const TrendingCoins = ({data, loading}) => {

    if(loading || data === null) {

        console.log("Here");

        return(
            <div className="flex items-center justify-center w-[100vw] h-[100vh]">
                Laoding ...
            </div>
        )
    }

    const coinsData = data?.coins?.slice(0, 3);
    console.log(coinsData);

    // console.log(data);



    return(
        <div className="rounded-lg bg-white p-5 flex flex-col gap-6">
            <h1 className="font-semibold text-2xl">
                Trending Coins (24H)
            </h1>
            <div className="flex flex-col gap-2">
                {
                    coinsData?.map((coin) => (
                        <div className="flex justify-between items-center">
                            <div className="flex gap-5 items-center">
                                <div className="w-[7vw] lg:w-[2vw]">
                                    <img src={coin.item.small} alt="coinImage" height={24} width={24} className="w-full h-full" />
                                </div>
                                <p className="font-semibold text-lg">
                                    {coin.item.name}
                                </p>
                            </div>
                            <div className={`${Math.round(coin.item.data.price_change_percentage_24h.usd*100)/100 < 0 ? "bg-[#EE68551A] text-[#E96975]" : "bg-[#EBF9F4] text-[#14B079]"} flex items-center gap-2 px-2 py-1 rounded-md`}>
                                {
                                    Math.round(coin.item.data.price_change_percentage_24h.usd*100)/100 < 0 ? (<BiSolidDownArrow className="text-[#E96975]" />) : (<BiSolidUpArrow />)
                                }
                                {
                                    Math.round(coin.item.data.price_change_percentage_24h.usd*100)/100
                                } %
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default TrendingCoins;