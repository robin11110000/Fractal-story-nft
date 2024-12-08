import { useState, useEffect } from 'react';

const useUnisatWallet = () => {
  const [address, setAddress] = useState('');
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasNFT, setHasNFT] = useState(false);

  const connectWallet = async () => {
    setLoading(true);
    setError(null);
    try {
      // Mock wallet connection
      const mockAddress = '0x1234567890abcdef1234567890abcdef12345678';
      setAddress(mockAddress);
      setConnected(true);
      console.log("Wallet connected with address:", mockAddress);
    } catch (err) {
      console.error('Failed to connect wallet:', err);
      setError('Failed to connect wallet');
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = () => {
    setAddress('');
    setConnected(false);
    setHasNFT(false);
    console.log("Wallet disconnected");
  };

  const mintTestNFT = () => {
    setHasNFT(true);
    console.log('Test NFT minted!');
  };

  return {
    address,
    connected,
    loading,
    error,
    hasNFT,
    connectWallet,
    disconnectWallet,
    mintTestNFT
  };
};

export default useUnisatWallet;