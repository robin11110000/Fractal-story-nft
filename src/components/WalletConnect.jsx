import React from 'react';
import useUnisatWallet from '../hooks/useUnisatWallet';

const WalletConnect = ({ onConnectionChange, theme }) => {
  const { address, connected, loading, error, connectWallet, disconnectWallet, hasNFT } = useUnisatWallet();

  const handleConnect = async () => {
    console.log("Connecting wallet...");
    await connectWallet();
    console.log("Wallet connected");
    onConnectionChange(true);
  };

  const handleDisconnect = () => {
    console.log("Disconnecting wallet...");
    disconnectWallet();
    console.log("Wallet disconnected");
    onConnectionChange(false);
  };

  return (
    <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <div className="flex flex-col items-center">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        
        {!connected ? (
          <button 
            onClick={handleConnect}
            disabled={loading}
            className={`px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all`}
          >
            {loading ? 'Connecting...' : 'Connect Wallet'}
          </button>
        ) : (
          <div>
            <p className="mb-2">Connected: {address}</p>
            <p className="mb-4">
              NFT Status: {hasNFT ? '✅ Owned' : '❌ Not Found'}
            </p>
            <button 
              onClick={handleDisconnect}
              className="px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition-all"
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletConnect;