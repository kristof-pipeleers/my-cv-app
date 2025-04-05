import React from "react";
import { cvData } from "./cvData";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import TabSwitch from "./components/TabSwitch";

const App: React.FC = () => {
  return (
    <div className="bg-[#0B1120] min-h-screen">
      <Hero data={cvData} />
      <WhatIDo data={cvData} />
      <TabSwitch data={cvData} />
    </div>
  );
};

export default App;
