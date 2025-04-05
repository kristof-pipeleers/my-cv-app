import React, { useState } from 'react';
import { Quality } from '../types';

interface Props {
  quality: Quality;
}

const QualityCard: React.FC<Props> = ({ quality }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-[#1E293B]/40 backdrop-blur-sm rounded-xl p-6 border border-blue-700/10
                 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl 
                 hover:shadow-blue-500/10 hover:border-blue-400/30 group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-lg 
                      flex items-center justify-center text-white text-xl
                      group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
          <i className={quality.icon}></i>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-white mb-2">{quality.title}</h4>
          <p className={`text-blue-200 text-sm leading-relaxed transition-all duration-300
                        ${isExpanded ? '' : 'line-clamp-2 md:line-clamp-none'}`}>
            {quality.description}
          </p>
          <button 
            className="md:hidden text-blue-400 text-sm mt-2 hover:text-blue-300"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QualityCard; 