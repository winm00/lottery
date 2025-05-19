const contractAddress = "0x1926422f84a61DB5B2831538CcB89188bBf3a080"; // Replace with your contract address
const abi = [
  // Paste your contract's ABI here
];

// Initialize variables
let provider, signer, contract;

// Connect wallet
async function connectWallet() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      contract = new ethers.Contract(contractAddress, abi, signer);

      const address = await signer.getAddress();
      document.getElementById("walletStatus").innerText = `Connected: ${address}`;
      document.getElementById("lotteryInfo").style.display = "block";
      fetchLotteryInfo();
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  } else {
    alert("MetaMask is not installed. Please install it to use this DApp.");
  }
}

// Fetch lottery details
async function fetchLotteryInfo() {
  const prizePool = ethers.utils.formatEther(await provider.getBalance(contractAddress));
  const participants = await contract.getPlayers();

  document.getElementById("prizePool").innerText = prizePool;
  document.getElementById("participants").innerText = participants.length;
}

// Buy a ticket
async function buyTicket() {
  try {
    const tx = await contract.enter({ value: ethers.utils.parseEther("0.001") });
    await tx.wait();
    alert("Ticket purchased successfully!");
    fetchLotteryInfo();
  } catch (error) {
    console.error("Error purchasing ticket:", error);
  }
}

// Pick a winner
async function pickWinner() {
  try {
    const tx = await contract.pickWinner();
    await tx.wait();
    alert("Winner picked successfully!");
    fetchLotteryInfo();
  } catch (error) {
    console.error("Error picking winner:", error);
  }
}

// Event listeners
document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("buyTicket").addEventListener("click", buyTicket);
document.getElementById("pickWinner").addEventListener("click", pickWinner);