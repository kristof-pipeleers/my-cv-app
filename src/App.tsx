import React from "react";
import { cvData } from "./cvData";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import TabSwitch from "./components/TabSwitch";
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#1A1A2E] dark:via-[#16213E] dark:to-[#0F172A] transition-colors duration-300">
        <ThemeToggle />
        <Hero data={cvData} />
        <WhatIDo data={cvData} />
        <TabSwitch data={cvData} />
    </div>
    </ThemeProvider>
  );
};

export default App;
