export const isValidSolanaAddress = (address: string): boolean => {
  // Basic regex for Base58 characters check
  // Solana addresses are typically base58 encoded strings of length 32-44
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
  return base58Regex.test(address);
};

export const CONTRACT_ADDRESS = "JEWSCAN88888888888888888888888888888888888"; 
