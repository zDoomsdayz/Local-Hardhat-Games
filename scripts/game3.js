// add the game address here and update the contract name if necessary
const gameAddr = "0x68B1D87F95878fE05B998F19b66F4baba5De1aed";
const contractName = "Game3";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    const tx = await game.win(45);

    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
