import React from "react";
import Bitcoin from "./Bitcoin";
import Stats from "./Stats";
import Sentiment from "./Sentiment";
import About from  "./About";
import Tokenomics from "./Tokenomics";
import Team from "./Team";
import YouMayAlsoLike from "./YouMayAlsoLike";
import Tabs from "./Tabs";

const Left = ({data, loading}) => {
    return(
        <div className="overflow-hidden flex flex-col gap-4 lg:w-[66%]">
            <Bitcoin />
            <Tabs />
            <Stats />
            <Sentiment />
            <About />
            <Tokenomics />
            <Team />
            <div className="flex lg:hidden">
                <YouMayAlsoLike />
            </div>
        </div>
    );
}

export default Left