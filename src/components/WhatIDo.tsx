import React from "react";
import { CVData } from "../types";

interface Props {
  data: CVData;
}

const WhatIDo: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative w-full bg-gradient-to-b from-gray-100 via-gray-50 to-gray-50
      dark:from-[#16213E] dark:via-[#16213E] dark:to-[#16213E] 
      py-16 transition-colors duration-300">
      {/* Optional: Additional gradient overlay for smoother transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-100 to-transparent
        dark:from-[#16213E] dark:to-transparent opacity-50"></div>

      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/95 dark:bg-white/[0.08] 
                border border-gray-200/80 dark:border-white/10 
                hover:shadow-lg hover:shadow-blue-500/10 
                transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-500/20 
                  flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-2xl text-blue-600 dark:text-blue-400`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo; 