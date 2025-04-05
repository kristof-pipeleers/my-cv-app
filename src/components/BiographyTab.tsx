import React from "react";
import { CVData } from "../types";

interface Props {
  data: CVData;
}

const Biography: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.experience.map((exp, index) => (
        <div key={index} className="bg-[#1E293B]/40 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-blue-300">{exp.company}</p>
            </div>
            <span className="bg-blue-700/50 text-blue-200 px-4 py-1 rounded-full text-sm">
              {exp.years}
            </span>
          </div>
          <p className="text-blue-100">{exp.description}</p>
        </div>
      ))}
    </>
  );
};

export default Biography; 