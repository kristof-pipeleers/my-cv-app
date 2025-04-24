import React from 'react';
import { CVData } from '../types';

interface Props {
  data: CVData;
}

const EducationTab: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid gap-6">
        {data.education.map((edu, index) => (
          <div 
            key={index}
            className="bg-white/95 dark:bg-white/[0.08] rounded-xl p-6 
              border border-gray-200/80 dark:border-white/10 
              hover:shadow-lg hover:shadow-blue-500/10 
              transition-all duration-300"
          >
            <div className="flex flex-col">
              {/* Header with logo, title, and years */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-start gap-4">
                  {edu.logo && (
                    <img 
                      src={`${process.env.PUBLIC_URL}/assets/education-logos/${edu.logo}`}
                      alt={`${edu.school} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400">
                      {edu.school}
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium 
                  bg-blue-100 dark:bg-blue-500/20 
                  text-blue-600 dark:text-blue-400 
                  whitespace-nowrap">
                  {edu.years}
                </span>
              </div>
              
              {/* Description */}
              {edu.description && (
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
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