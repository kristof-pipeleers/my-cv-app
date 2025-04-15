import React from 'react';
import { Experience } from '../types';

interface Props {
  experience: Experience;
  isEven: boolean;
}

const ExperienceCard: React.FC<Props> = ({ experience, isEven }) => {
  return (
    <div className="group w-full transform transition-all duration-300 hover:scale-[1.02]">
      <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 rounded-xl 
        bg-white/95 dark:bg-white/[0.08] border border-gray-200/80 dark:border-white/10 
        hover:shadow-lg hover:shadow-blue-500/10 transition-colors duration-300">
        {/* Period Tag */}
        <div className="absolute -top-3 right-4 px-3 py-1 
          bg-blue-600 dark:bg-blue-500 text-white
          text-xs font-medium rounded-full shadow-lg shadow-blue-500/20">
          {experience.period}
        </div>

        {/* Organization Logo & Link */}
        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]">
          <a
            href={experience.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block group/logo"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/experience-logos/${experience.logo}`}
              alt={`${experience.organization} logo`}
              className="w-full h-full rounded-lg object-contain transition-transform duration-300 group-hover/logo:scale-110"
            />
          </a>
        </div>

        {/* Content */}
        <div className="flex-grow text-center sm:text-left">
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-1">
              {experience.title}
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {experience.organization}
              </a>
            </div>
          </div>

          {/* Highlights */}
          <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            {experience.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="flex-grow">{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          {experience.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full 
                    bg-blue-100 dark:bg-blue-500/20 
                    text-blue-600 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard; 