import React from "react";
import ActionCenter from "./ActionCenter";
import TrendingCoins from "./TrendingCoins";

const Right = ({data, loading}) => {
    return(
        <div className="lg:w-[32%] flex flex-col gap-6">
            <ActionCenter />
            <TrendingCoins data={data} loading={loading} />
        </div>
    );
}

export default Right;