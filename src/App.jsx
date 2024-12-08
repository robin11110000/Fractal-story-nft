import React, { useState } from "react";
import WalletConnect from "./components/WalletConnect";
import StoryViewer from "./components/StoryViewer";
import "./App.css";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // Add console log to debug
  console.log("Wallet connection status:", isConnected);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} p-4`}>
      <div className="max-w-4xl mx-auto">
        <button onClick={toggleTheme} className="p-2 rounded-full bg-yellow-400 text-gray-900">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <WalletConnect onConnectionChange={setIsConnected} theme={theme} />
        <div className="text-center mt-4">
          Connection Status: {isConnected ? 'Connected' : 'Not Connected'}
        </div>
        {isConnected && <StoryViewer theme={theme} />}
      </div>
    </div>
  );
}

export default App;