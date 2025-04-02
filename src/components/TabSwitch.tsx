import React, { useState } from "react";
import { CVData } from "../types";
import Biography from "./Biography";
import SkillsTab from "./SkillsTab";
import EducationTab from "./EducationTab";

interface Props {
  data: CVData;
}

const TabSwitch: React.FC<Props> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<string>("education");

  const tabs = [
    { id: "biography", label: "BIOGRAPHY", number: "01" },
    { id: "skills", label: "SKILLS", number: "02" },
    { id: "education", label: "EDUCATION", number: "03" }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#0F172A] to-[#0B1120] py-20 px-4 -mt-1">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">My Resume</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-10"></div>
        
        {/* Tab Switch */}
        <div className="bg-[#1E293B]/50 rounded-full p-2 flex justify-between max-w-3xl mx-auto backdrop-blur-sm shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id 
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" 
                  : "text-blue-300 hover:text-white"
              }`}
            >
              <span className="font-medium mr-4">{tab.label}</span>
              <span className="text-sm opacity-70">{tab.number}</span>
            </button>
          ))}
        </div>

        {/* Content based on active tab */}
        <div className="mt-10 bg-[#1E293B]/30 rounded-xl p-8 backdrop-blur-sm shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {activeTab === "biography" && <Biography data={data} />}
            {activeTab === "skills" && <SkillsTab data={data} />}
            {activeTab === "education" && <EducationTab data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSwitch; 