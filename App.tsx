import React from 'react';
import { Header } from './components/Header';
import { ScanSection } from './components/ScanSection';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 transition-transform duration-[20s] hover:scale-105"
        style={{
          backgroundImage: "url('https://i.postimg.cc/jdgxRKFv/freepik-create-a-older-jewish-character-looking-at-viewer-20787.jpg')",
          backgroundPosition: "center 20%" // Adjusted to focus more on the face which is likely in upper center
        }}
      >
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 opacity-90"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-brightness-75"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        <Header />
        
        <main className="flex-1 flex flex-col justify-end pb-10 md:pb-20">
          <ScanSection />
        </main>
      </div>
    </div>
  );
};

export default App;
