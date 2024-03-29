import { ethers } from "ethers";
import { useContext } from "react";
import Web3Modal from "web3modal";
import Voting from "../artifacts/contracts/Voting.sol/Voting.json";
import { appDetailsContext } from "../context/AppDetails";
import addressJSON from '../address/address.json'


const getUrl = (chainId) => {
  switch (chainId) {
    case 80001:
      return "https://rpc-mumbai.maticvigil.com/";
      // return "https://polygon-mumbai-bor-rpc.publicnode.com/";
    case 1666700000:
      return "https://api.s0.b.hmny.io";
    default:
      throw new Error("Invalid network");
  }
};

const getContractAddress = (chainId) => {
// Specify the file path to read from
  console.log(addressJSON?.address,addressJSON?.address)
  console.log(chainId)
  switch (chainId) {
    case 80001:
      return addressJSON?.address;
    case 1666700000:
      return "0xEEF20045d1CC0A94D6D4Ee02dbB677FfFE45D9B9";
    default:
      throw new Error("Invalid network");
  }
};

const useVoting = async ({ getRequest = true }) => {
  const [appDetails, setAppDetails] = useContext(appDetailsContext);
  const address = appDetails.address;
  if (getRequest) {
    const provider = new ethers.providers.JsonRpcProvider({
      url: getUrl(appDetails.chainId),
    });
    const contract = new ethers.Contract(
      getContractAddress(appDetails.chainId),
      Voting.abi,
      provider
    );
    return { address, contract };
  } else {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      getContractAddress(appDetails.chainId),
      Voting.abi,
      signer
    );
    return { address, contract };
  }
};

export default useVoting;
