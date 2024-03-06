import React from "react";
import john1 from "../Assets/john1.svg";
import john2 from "../Assets/john2.svg";
import elina from "../Assets/elina.svg";

const IMAGES = {
    "john1": john1,
    "john2": john2,
    "elina": elina
}


const TeamMember = ({data}) => {
    return(
        <div className="flex flex-col lg:flex-row items-center gap-4 py-4 px-8 bg-[#E8F4FD] rounded-lg">
            {/* Image Div */}
            <div className="flex flex-col items-center gap-1 w-[71%]">
                <div className="w-full h-full">
                    <img src={IMAGES[data.image]} alt="" className="w-full h-full" />
                </div>
                <h2>
                    {data.name}
                </h2>
                <p>
                    {data.designation}
                </p>
            </div>

            {/* Description div */}
            <div>
                <p className="text-[#0F1629] text-lg">
                    {data.description}
                </p>
            </div>
        </div>
    );
}

export default TeamMember;