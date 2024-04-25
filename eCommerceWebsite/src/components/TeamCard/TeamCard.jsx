import React from "react";

const TeamCard = ({team_img,team_name,team_designation}) => {
  return (
    <div className="w-[100%] my-10">
      <div className="flex flex-col gap-5">
        <div className="bg-[#f5f5f5] h-80 w-full py-5 overflow-hidden">
          <img src={team_img} alt="" className="w-full h-auto object-cover mx-auto" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-black font-semibold text-xl">{team_name}</h2>
          <h2 className="text-black font-semibold text-sm">
            {team_designation}
          </h2>
          <div className="flex items-center gap-4 ">
            <img src="icons/twitter-b.png" alt="" className="w-5" />
            <img src="icons/insta-b.png" alt="" className="w-5" />
            <img src="icons/linkedin-b.png" alt="" className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
