import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CommonButton =  ({text}) => {
    return(
        <button className="flex flex-row gap-2 items-center justify-center bg-white text-[#0F1629] font-semibold rounded-lg px-4 py-2">
            {text} <FaArrowRightLong fontSize={20}/>
        </button>
    );
}

export default CommonButton;