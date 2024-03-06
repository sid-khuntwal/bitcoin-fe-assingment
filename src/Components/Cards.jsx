import React from "react";
import CheckNowButton from "./CommonButton";

const Card = ({image, description, gradient}) => {
    return(
        <div className={`${gradient} flex gap-4 w-full rounded-lg p-3`}>
            <div className="w-[50%]">
                <img src={image} alt="cardImage" />
            </div>
            <div className="flex flex-col gap-4 text-white text-lg font-semibold items-start">
                <p className="text-2xl font-semibold">
                    {description}
                </p>
                <CheckNowButton text={"Check Now"}/>
            </div>
        </div>
    );
}

export default Card;