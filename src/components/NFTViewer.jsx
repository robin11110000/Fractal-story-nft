import { useState, useEffect } from 'react';

const NFTViewer = ({ theme }) => {
  const [nftData, setNftData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTData = async () => {
      if (window.unisat) {
        try {
          const balance = await window.unisat.getBalance();
          // For demo purposes, showing sample NFT data
          setNftData({
            balance: balance,
            collection: "Story NFTs",
            attributes: [
              { trait: "Type", value: "Story Chapter" },
              { trait: "Rarity", value: "Common" }
            ]
          });
        } catch (err) {
          console.error('Error fetching NFT data:', err);
        }
        setLoading(false);
      }
    };

    fetchNFTData();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading NFT data...</div>;
  }

  return (
    <div className={`p-6 rounded-lg mb-4 ${
      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
    }`}>
      <h2 className="text-xl font-bold mb-4">Your NFT Details</h2>
      
      {nftData ? (
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded bg-opacity-50 bg-black">
            <h3 className="font-semibold">Collection</h3>
            <p>{nftData.collection}</p>
          </div>
          <div className="p-4 rounded bg-opacity-50 bg-black">
            <h3 className="font-semibold">Balance</h3>
            <p>{nftData.balance} sats</p>
          </div>
          <div className="col-span-2">
            <h3 className="font-semibold mb-2">Attributes</h3>
            <div className="grid grid-cols-2 gap-2">
              {nftData.attributes.map((attr, index) => (
                <div key={index} className="p-2 rounded bg-opacity-50 bg-black">
                  <span className="font-medium">{attr.trait}: </span>
                  {attr.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center p-4">
          <p>No NFTs found in your wallet</p>
          <button 
            className="mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
            onClick={() => window.open('https://unisat.io/market', '_blank')}
          >
            Browse NFTs
          </button>
        </div>
      )}
    </div>
  );
};

export default NFTViewer;