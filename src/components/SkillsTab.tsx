import React from "react";
import { CVData } from "../types";

interface Props {
  data: CVData;
}

const SkillsTab: React.FC<Props> = ({ data }) => {
  return (
    <div className="col-span-2">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.skills.map((skill, index) => (
          <div key={index} className="bg-[#1E293B]/40 rounded-lg p-4 backdrop-blur-sm hover:bg-[#1E293B]/60 transition-all duration-300">
            <h3 className="text-lg font-bold text-white">{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTab; 