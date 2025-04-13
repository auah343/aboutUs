import React from 'react';
import './styles/main.css';
import AboutSection from './components/AboutSection';
import TechnologySection from './components/TechnologySection';
import JoinSection from './components/JoinSection';
import IntroduceToHPCRC from './components/IntroduceToHPCRC';
import MainFunction from './components/MainFunction';
import Model from './components/Model';
import TechAdvan from './components/TechAdvan';

function App() {
  return (
    <div >
      <main className="scroll-container " >
        <AboutSection  />
        <IntroduceToHPCRC  />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-0 mb-5">
        <MainFunction  />
        <TechAdvan />
        </div>
        <TechnologySection  />
        <Model />
        <JoinSection  />
      </main>
    </div>
  );
}

export default App;