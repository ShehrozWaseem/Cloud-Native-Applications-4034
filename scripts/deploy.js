const hre = require("hardhat");
const fs = require('fs').promises; // Using the promises version of fs
const path = require('path');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy();

  await voting.deployed();
  
  const accAdd = {
    address: voting.address
  };
  
  const jsonData = JSON.stringify(accAdd, null, 2);

  // Specify the file path
  const filePath = path.join(__dirname, '../address/address.json');

  try {
    // Create the directory if it doesn't exist
    await fs.mkdir(path.dirname(filePath), { recursive: true });

    // Write the JSON data to the file
    await fs.writeFile(filePath, jsonData);

    console.log('Address has been written to', filePath);
    console.log("Voting deployed to:", voting.address);
  } catch (error) {
    console.error('Error writing file:', error);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.

// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
