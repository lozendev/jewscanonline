import React, { useState } from 'react';
import { ScanResult } from '../types';
import { isValidSolanaAddress } from '../utils/validation';
import { Loader2, Search, AlertCircle } from 'lucide-react';

export const ScanSection: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ScanResult>(null);
  const [error, setError] = useState<string | null>(null);

  const possibleResults: ScanResult[] = [
    'Not a JEW',
    'Defo NOT a JEW',
    'JEW',
    'Defo a JEW'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!walletAddress.trim()) {
      setError('Please enter a wallet address');
      return;
    }

    if (!isValidSolanaAddress(walletAddress)) {
      setError('Invalid Solana wallet address');
      return;
    }

    setIsLoading(true);

    // Simulate scanning delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * possibleResults.length);
      setResult(possibleResults[randomIndex]);
      setIsLoading(false);
    }, 2000);
  };

  const getResultColor = (res: ScanResult) => {
    switch (res) {
      case 'JEW':
      case 'Defo a JEW':
        return 'text-gold-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]';
      case 'Not a JEW':
      case 'Defo NOT a JEW':
        return 'text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 pb-12 flex flex-col items-center justify-end min-h-[60vh] gap-6">
      
      {/* Result Display Area */}
      <div className="h-32 flex items-end justify-center w-full mb-4">
        {isLoading ? (
          <div className="flex flex-col items-center gap-2 animate-pulse">
            <Loader2 className="w-12 h-12 text-gold-500 animate-spin" />
            <span className="text-gold-300 font-display text-xl">Scanning Ledger...</span>
          </div>
        ) : result ? (
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-display font-black text-center transition-all duration-500 transform scale-100 ${getResultColor(result)} text-shadow-lg`}>
            {result}
          </h1>
        ) : null}
      </div>

      <p className="text-gold-400 font-display text-lg md:text-xl text-center text-shadow">
        paste a solana wallet address to find out if a jew owns it
      </p>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="w-full relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-yellow-300 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative flex flex-col md:flex-row gap-2 bg-black/80 backdrop-blur-xl p-2 rounded-xl border border-white/10">
          <div className="flex-1 relative">
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => {
                setWalletAddress(e.target.value);
                setError(null);
              }}
              placeholder="Enter Solana Wallet Address"
              className="w-full bg-transparent text-white placeholder-white/30 px-4 py-3 md:py-4 outline-none font-mono text-sm md:text-base"
            />
            {error && (
              <div className="absolute -top-10 left-0 text-red-400 text-sm flex items-center gap-1 bg-black/90 px-3 py-1 rounded-md border border-red-500/50">
                <AlertCircle size={14} />
                {error}
              </div>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-wider px-8 py-3 md:py-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px]"
          >
            {isLoading ? '...' : (
              <>
                <span>Scan</span>
                <Search size={18} className="stroke-[3]" />
              </>
            )}
          </button>
        </div>
      </form>

      <p className="text-white/30 text-xs md:text-sm text-center max-w-md">
        By pasting wallet, you agree that this is a satire application.
        <br/>Only Solana network supported.
      </p>
    </div>
  );
};
