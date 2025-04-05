import React from "react";
import { CVData } from "../types";

interface Props {
  data: CVData;
}

const WhatIDo: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#0F172A] to-[#0B1120] pt-20 pb-20 px-4 -mt-10">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0F172A] to-transparent z-0"></div>
      
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Do</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-blue-200 max-w-2xl mx-auto">
          Areas I explore, work on, and continuously learn about.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#1E293B]/40 backdrop-blur-sm p-8 rounded-xl border border-blue-700/10 
                         transition-all duration-300 hover:-translate-y-2 
                         hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/30
                         group"
            >
              <div className="mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-lg 
                                flex items-center justify-center text-white text-2xl mb-6
                                group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              </div>
              <p className="text-blue-200 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo; 