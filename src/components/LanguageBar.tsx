import React, { useState } from 'react';
import { Language } from '../types';

interface Props {
  language: Language;
}

const LanguageBar: React.FC<Props> = ({ language }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative p-4 bg-[#1E293B]/40 rounded-lg backdrop-blur-sm
                 hover:bg-[#1E293B]/60 transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-semibold">{language.name}</span>
        <span className="text-blue-300 text-sm italic">
          {language.level.nl}
        </span>
      </div>
      
      <div className="relative h-2 bg-blue-900/30 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full rounded-full
                     bg-gradient-to-r from-blue-500 to-indigo-500
                     transition-all duration-500 ease-out
                     group-hover:shadow-[0_0_12px_0_rgba(59,130,246,0.5)]"
          style={{ width: `${language.proficiency}%` }}
        />
      </div>

      {/* Tooltip */}
      <div 
        className={`absolute -top-12 left-1/2 transform -translate-x-1/2
                    bg-blue-900/90 text-white text-sm py-1 px-3 rounded-lg
                    transition-all duration-200 backdrop-blur-sm
                    ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        {language.proficiency}%
        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2
                      border-l-[6px] border-l-transparent
                      border-r-[6px] border-r-transparent
                      border-t-[6px] border-t-blue-900/90" />
      </div>
    </div>
  );
};

export default LanguageBar; 