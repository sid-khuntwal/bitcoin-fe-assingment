import React from "react";
import actionImage from "../Assets/actionImage.svg";
import CommonButton from "./CommonButton";

const ActionCenter = () => {
    return(
        <div className="bg-[#0052FE] px-6 py-12 flex flex-col gap-10 items-center rounded-xl">
            <h1 className="text-white text-3xl w-[80%] text-center font-bold">
                Get Started with KoinX for Free
            </h1>
            <p className="text-white text-center text-lg">
                With our range of features that you can equip for free, KoinX allows you 
                to be more educated and aware of your tax reports.
            </p>
            <div>
                <img src={actionImage} alt="ActkionImage" />
            </div>
            <CommonButton text={"Get Started for Free"}/>
        </div>
    );
}

export default ActionCenter