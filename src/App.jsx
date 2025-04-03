import React from 'react';
import './styles/main.css';
import AboutSection from './components/AboutSection';
import TechnologySection from './components/TechnologySection';
import JoinSection from './components/JoinSection';
import IntroduceToHPCRC from './components/IntroduceToHPCRC';

function App() {
  return (
    <div >
      <main className="scroll-container" >
        <AboutSection  />
        <IntroduceToHPCRC  />
        <TechnologySection  />
        <JoinSection  />
      </main>
    </div>
  );
}

export default App;