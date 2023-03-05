const { ethers } = require('hardhat');
require('dotenv').config({ path: '.env' });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require('../constants');

async function main() {
  // Address of the Crypto Devs NFT contract that you deployed in the previous module
  const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;
  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const cryptoDevsTokenContract = await ethers.getContractFactory(
    'CryptoDevToken'
  );

  // deploy the contract
  const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(
    cryptoDevsNFTContract
  );

  await deployedCryptoDevsTokenContract.deployed();

  // print the address of the deployed contract
  console.log(
    'Crypto Devs Token Contract Address:',
    deployedCryptoDevsTokenContract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Crypto Devs Token Contract Address: 0x1a55E60E7770401c96B08516E10b2807566FEe79
