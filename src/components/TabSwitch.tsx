import React, { useState } from "react";
import { CVData } from "../types";
import Biography from "./BiographyTab";
import SkillsTab from "./SkillsTab";
import EducationTab from "./EducationTab";

interface Props {
  data: CVData;
}

const TabSwitch: React.FC<Props> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<string>("biography");

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-8 py-8 sm:py-12">
      {/* Tab buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center mb-8 space-y-2 sm:space-y-0 sm:space-x-4">
        <button
          onClick={() => setActiveTab("biography")}
          className={`w-full sm:w-auto px-4 py-2 text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 ${
            activeTab === "biography"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
              : "bg-gray-200/10 text-gray-400 hover:bg-gray-200/20"
          }`}
        >
          Biography
        </button>
        <button
          onClick={() => setActiveTab("skills")}
          className={`w-full sm:w-auto px-4 py-2 text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 ${
            activeTab === "skills"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
              : "bg-gray-200/10 text-gray-400 hover:bg-gray-200/20"
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`w-full sm:w-auto px-4 py-2 text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 ${
            activeTab === "education"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
              : "bg-gray-200/10 text-gray-400 hover:bg-gray-200/20"
          }`}
        >
          Education
        </button>
      </div>

      {/* Tab content container */}
      <div className="min-h-[400px] sm:min-h-[500px]">
        {/* Tab content */}
        <div className={`transition-opacity duration-300 ${
          activeTab === "biography" ? "opacity-100" : "opacity-0 hidden"
        }`}>
          <Biography data={data} />
        </div>
        <div className={`transition-opacity duration-300 ${
          activeTab === "skills" ? "opacity-100" : "opacity-0 hidden"
        }`}>
          <SkillsTab data={data} />
        </div>
        <div className={`transition-opacity duration-300 ${
          activeTab === "education" ? "opacity-100" : "opacity-0 hidden"
        }`}>
          <EducationTab data={data} />
        </div>
      </div>
    </div>
  );
};

export default TabSwitch; 