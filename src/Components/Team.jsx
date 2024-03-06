import React from "react";
import TeamMember from "./TeamMember";
import { teamData } from "../Data/TeamData";

const Team = () => {
    return(
        <div className="bg-[#ffffff] p-6 rounded-lg flex flex-col gap-6">
            <h1 className="text-3xl font-semibold text-[#0F1629]">
                Team
            </h1>
            <p className="text-[#3E424A] text-xl">
                Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis 
                in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam 
                augue.
            </p>
            <div className="flex flex-col gap-6">
                {
                    teamData.map((data) => (
                        <TeamMember key={data.id} data={data} />
                    ))
                }
            </div>
        </div>
    );
} 

export default Team;