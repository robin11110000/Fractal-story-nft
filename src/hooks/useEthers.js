import { ethers } from 'ethers';

const provider = new ethers.providers.Web3Provider(window.ethereum);

const connectWallet = async () => {
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  return { provider, signer, address };
};

export { connectWallet };