const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Pass the correct name and symbol to the constructor
  const GillFactory = await hre.ethers.getContractFactory("Gill");
  const gill = await GillFactory.deploy("GillToken", "GILL");

  await gill.deployed();

  console.log(`Gill deployed to: ${gill.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
