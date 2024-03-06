import React, { useState } from "react";
import TrendingCoinsCarousel from "./TrendingCoinsCarousel";
import axios from "axios";

const YouMayAlsoLike = () => {

    return(
        <div className=" bg-white p-6 flex  flex-col gap-6 w-full rounded-lg lg:rounded-none lg:p-16">
            <h1 className="font-semibold text-3xl">
                You May Also Like
            </h1>
            
            <TrendingCoinsCarousel />

            <h2 className="font-semibold text-2xl">
                Trending Coins
            </h2>

            <TrendingCoinsCarousel />
        </div>
    );
}

export default YouMayAlsoLike;