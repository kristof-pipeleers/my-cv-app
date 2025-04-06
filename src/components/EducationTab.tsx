import React, { useState } from "react";
import { CVData } from "../types";

interface Props {
  data: CVData;
}

const EducationTab: React.FC<Props> = ({ data }) => {
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null);

  // Toggle expanded education item
  const toggleEducation = (index: number) => {
    if (expandedEducation === index) {
      setExpandedEducation(null);
    } else {
      setExpandedEducation(index);
    }
  };

  return (
    <section className="col-span-2 space-y-4">
      {data.education.map((edu, index) => (
        <article 
          key={index} 
          className="bg-[#1E293B]/40 rounded-lg p-5 backdrop-blur-sm transition-all duration-300 hover:bg-[#1E293B]/60 cursor-pointer"
          onClick={() => toggleEducation(index)}
        >
          <div className="flex flex-col sm:flex-row items-start">
            {/* School Logo */}
            <div className="mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
              {edu.logo ? (
                <img 
                  src={`assets/education-logos/${edu.logo}`} 
                  alt={`${edu.school} logo`}
                  className="w-16 h-16 rounded-lg object-contain p-1"
                  onError={(e) => {
                    // Fallback to first letter if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                        ${edu.school.charAt(0)}
                      </div>
                    `;
                  }}
                />
              ) : (
                <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  {edu.school.charAt(0)}
                </div>
              )}
            </div>
            
            {/* Education Details */}
            <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {edu.degree}
                </h3>
                <p className="text-blue-300">{edu.school}</p>
              </div>
              <span className="bg-blue-700/50 text-blue-200 px-4 py-1 rounded-full text-sm mt-2 sm:mt-0 whitespace-nowrap inline-block shrink-0">
                {edu.years}
              </span>
            </div>
              
              {/* Expanded content */}
              <div className={`mt-4 text-blue-100 transition-all duration-300 overflow-hidden ${
                expandedEducation === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p>
                  During my time at {edu.school}, I gained valuable knowledge and skills in {edu.degree}. 
                  This education has been fundamental to my professional development.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-blue-600/50 text-blue-200 px-3 py-1 rounded-full text-sm">
                    Academic Excellence
                  </span>
                  <span className="bg-blue-600/50 text-blue-200 px-3 py-1 rounded-full text-sm">
                    Research
                  </span>
                  <span className="bg-blue-600/50 text-blue-200 px-3 py-1 rounded-full text-sm">
                    Teamwork
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default EducationTab; 