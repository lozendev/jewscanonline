import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { CONTRACT_ADDRESS } from '../utils/validation';

export const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
      {/* Left Logo */}
      <div className="w-auto md:w-32 flex justify-start">
        <div className="text-2xl md:text-3xl font-display font-black text-white tracking-widest text-shadow-lg border-b-2 border-gold-500 pb-1">
          JEWSCAN
        </div>
      </div>

      {/* Center Button */}
      <div className="flex-1 flex justify-center md:flex-none">
        <button
          onClick={handleCopy}
          className="group relative flex items-center gap-2 px-6 py-2 bg-black/60 backdrop-blur-md border border-gold-500/50 rounded-full text-gold-400 font-bold tracking-wider hover:bg-gold-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)]"
        >
          <span className="text-sm md:text-base">CA: updating</span>
          {copied ? <Check size={16} /> : <Copy size={16} />}
          
          {/* Tooltip for copy confirmation */}
          <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white bg-black/80 px-2 py-1 rounded transition-opacity duration-200 ${copied ? 'opacity-100' : 'opacity-0'}`}>
            Copied!
          </span>
        </button>
      </div>

      {/* Spacer for centering logic on desktop */}
      <div className="hidden md:block w-32"></div>
    </nav>
  );
};