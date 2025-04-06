import React, { useState } from 'react';
import { Language } from '../types';

interface Props {
  language: Language;
}

const LanguageBar: React.FC<Props> = ({ language }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-blue-300">{language.name}</span>
        <span className="text-sm font-medium text-blue-300">{language.proficiency}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full">
        <div
          className={`h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-300 ${
            isHovered ? 'shadow-lg shadow-blue-500/30' : ''
          }`}
          style={{ width: `${language.proficiency}%` }}
        />
      </div>
    </div>
  );
};

export default LanguageBar; 