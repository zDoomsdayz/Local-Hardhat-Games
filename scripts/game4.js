// add the game address here and update the contract name if necessary
const gameAddr = "0x59b670e9fA9D0A427751Af201D676719a970857b";
const contractName = "Game4";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    const tx = await game.win(56);

    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
