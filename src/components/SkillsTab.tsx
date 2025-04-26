import React from "react";
import { CVData } from "../types";
import QualityCard from "./QualityCard";
import LanguageBar from "./LanguageBar";

interface Props {
  data: CVData;
}

const SkillsTab: React.FC<Props> = ({ data }) => {
  return (
    <div className="col-span-2 space-y-12">
      {/* Personal Skills */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Personal Skills</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {data.qualities.map((quality, index) => (
            <div
              key={quality.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <QualityCard quality={quality} />
            </div>
          ))}
        </div>
      </div>

      {/* Language Skills */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Language Skills</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {data.languages.map((language, index) => (
            <div
              key={language.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <LanguageBar language={language} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsTab; 