import React from 'react';
import { CVData } from '../types';
import ExperienceCard from './ExperienceCard';

interface Props {
  data: CVData;
}

const ExperienceTab: React.FC<Props> = ({ data }) => {
  // Sort experiences by period (most recent first)
  const sortedExperiences = [...data.experience].sort((a, b) => {
    // Extract the last year from the period (handles both "YYYY – YYYY" and "YYYY" formats)
    const getLastYear = (period: string) => {
      const years = period.split('–').map(year => year.trim());
      return parseInt(years[years.length - 1]);
    };

    const yearA = getLastYear(a.period);
    const yearB = getLastYear(b.period);

    // Sort in descending order (most recent first)
    return yearB - yearA;
  });

  return (
    <div className="animate-fade-in">
      <div className="space-y-6 sm:space-y-8">
        {sortedExperiences.map((exp, index) => (
          <div
            key={index}
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <ExperienceCard 
              experience={exp} 
              isEven={index % 2 === 0} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTab; 