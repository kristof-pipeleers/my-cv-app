import React from 'react';
import { CVData } from '../types';

interface Props {
  data: CVData;
}

const EducationTab: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4">
      <div className="grid gap-4 sm:gap-6">
        {data.education.map((edu, index) => (
          <div 
            key={index}
            className="bg-white/95 dark:bg-white/[0.08] rounded-xl p-4 sm:p-6 
              border border-gray-200/80 dark:border-white/10 
              hover:shadow-lg hover:shadow-blue-500/10 
              transition-all duration-300
              animate-fade-in-up"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="flex flex-col">
              {/* Header with logo, title, and years */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                <div className="flex flex-col xs:flex-row sm:flex-row items-start gap-2 sm:gap-4 w-full">
                  {edu.logo && (
                    <img 
                      src={`${process.env.PUBLIC_URL}/assets/education-logos/${edu.logo}`}
                      alt={`${edu.school} logo`}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-2 xs:mb-0"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 text-sm sm:text-base">
                      {edu.school}
                    </span>
                  </div>
                </div>
                <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium 
                  bg-blue-100 dark:bg-blue-500/20 
                  text-blue-600 dark:text-blue-400 
                  whitespace-nowrap mt-2 sm:mt-0">
                  {edu.years}
                </span>
              </div>
              
              {/* Description */}
              {edu.description && (
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm mt-2">
                  {edu.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTab; 