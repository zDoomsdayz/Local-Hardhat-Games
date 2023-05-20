// add the game address here and update the contract name if necessary
const gameAddr = "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    await game.giveMeAllowance(20000);
    await game.mint(15000);

    const tx = await game.win();

    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
