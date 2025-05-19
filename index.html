<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decentralized Lottery</title>
    <script src="https://cdn.ethers.io/lib/ethers-5.7.2.umd.min.js" type="application/javascript"></script>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
            background-color: #f9f9f9;
        }
        .container {
            background-color: white;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
        }
        .info-box {
            background-color: #f8f9fa;
            border-left: 4px solid #6c5ce7;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 4px;
        }
        .button {
            background-color: #6c5ce7;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin: 10px 0;
            transition: background-color 0.3s;
            width: 100%;
        }
        .button:hover {
            background-color: #5649c0;
        }
        .button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
        .status {
            padding: 15px;
            margin-top: 20px;
            border-radius: 5px;
            font-weight: 500;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        .warning {
            background-color: #fff3cd;
            color: #856404;
            border: 1px solid #ffeeba;
        }
        .player-list {
            margin-top: 20px;
            max-height: 200px;
            overflow-y: auto;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
        }
        .player-item {
            padding: 8px;
            border-bottom: 1px solid #eee;
        }
        .player-item:last-child {
            border-bottom: none;
        }
        .lottery-stats {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            gap: 10px;
        }
        .stat-box {
            flex: 1;
            background-color: #e9f7fe;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            border: 1px solid #c5e8fc;
        }
        .stat-value {
            font-size: 1.5em;
            font-weight: bold;
            color: #4a5568;
        }
        @media (max-width: 600px) {
            .lottery-stats {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Decentralized Lottery</h1>
        
        <div class="info-box">
            <p><strong>How it works:</strong> Enter the lottery by paying 0.001 ETH. When the lottery owner picks a winner, one random participant will receive the entire prize pool!</p>
        </div>
        
        <div id="connection-status" class="status warning">
            Please connect your wallet to continue...
        </div>
        
        <button id="connect-wallet" class="button">Connect Wallet</button>
        
        <div class="lottery-stats">
            <div class="stat-box">
                <p>Prize Pool</p>
                <div id="prize-pool" class="stat-value">0 ETH</div>
            </div>
            <div class="stat-box">
                <p>Participants</p>
                <div id="participant-count" class="stat-value">0</div>
            </div>
        </div>
        
        <button id="enter-lottery" class="button" disabled>Enter Lottery (0.001 ETH)</button>
        
        <div id="admin-section" style="display: none; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <h3>Admin Controls</h3>
            <button id="pick-winner" class="button">Pick Winner</button>
        </div>
        
        <h3>Current Participants</h3>
        <div id="players-list" class="player-list">
            <p>No participants yet.</p>
        </div>
        
        <div id="status-message"></div>
    </div>

    <script>
        // Contract Constants
        const CONTRACT_ADDRESS = '0x1926422f84a61DB5B2831538CcB89188bBf3a080';
        const CONTRACT_ABI = [
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_studentId",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "player",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "LotteryEntered",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "winner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "prize",
                        "type": "uint256"
                    }
                ],
                "name": "WinnerPicked",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "enter",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getPlayers",
                "outputs": [
                    {
                        "internalType": "address[]",
                        "name": "",
                        "type": "address[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pickWinner",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "players",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "studentId",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];

        // App Variables
        let provider, signer, contract;
        let connectedAddress = null;
        
        // DOM Elements
        const connectWalletBtn = document.getElementById('connect-wallet');
        const enterLotteryBtn = document.getElementById('enter-lottery');
        const pickWinnerBtn = document.getElementById('pick-winner');
        const connectionStatus = document.getElementById('connection-status');
        const playersList = document.getElementById('players-list');
        const adminSection = document.getElementById('admin-section');
        const prizePool = document.getElementById('prize-pool');
        const participantCount = document.getElementById('participant-count');
        const statusMessage = document.getElementById('status-message');

        // Connect to MetaMask and setup contract
        async function connectWallet() {
            try {
                if (window.ethereum) {
                    provider = new ethers.providers.Web3Provider(window.ethereum);
                    
                    // Request account access
                    const accounts = await provider.send("eth_requestAccounts", []);
                    connectedAddress = accounts[0];
                    
                    signer = provider.getSigner();
                    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
                    
                    // Update UI based on connection
                    connectionStatus.className = 'status success';
                    connectionStatus.textContent = 'Connected: ' + connectedAddress.substring(0, 6) + '...' + connectedAddress.substring(38);
                    enterLotteryBtn.disabled = false;
                    connectWalletBtn.disabled = true;
                    
                    // Check if user is contract owner
                    const owner = await contract.owner();
                    if (owner.toLowerCase() === connectedAddress.toLowerCase()) {
                        adminSection.style.display = 'block';
                    }
                    
                    // Load initial lottery data
                    await refreshLotteryData();
                    
                    // Setup event listeners for contract events
                    setupEventListeners();
                    
                    return true;
                } else {
                    showStatus('No Ethereum wallet found. Please install MetaMask.', 'error');
                    return false;
                }
            } catch (error) {
                console.error(error);
                showStatus('Failed to connect wallet: ' + error.message, 'error');
                return false;
            }
        }
        
        // Refresh lottery data
        async function refreshLotteryData() {
            try {
                // Get current players
                const players = await contract.getPlayers();
                updatePlayersList(players);
                
                // Get current balance
                const balance = await provider.getBalance(CONTRACT_ADDRESS);
                prizePool.textContent = ethers.utils.formatEther(balance) + ' ETH';
                
                // Update participant count
                participantCount.textContent = players.length;
            } catch (error) {
                console.error('Error refreshing lottery data:', error);
            }
        }
        
        // Update the players list
        function updatePlayersList(players) {
            if (players.length === 0) {
                playersList.innerHTML = '<p>No participants yet.</p>';
                return;
            }
            
            playersList.innerHTML = '';
            players.forEach(player => {
                const playerElement = document.createElement('div');
                playerElement.className = 'player-item';
                
                // Highlight the current user
                if (player.toLowerCase() === connectedAddress?.toLowerCase()) {
                    playerElement.style.backgroundColor = '#e6f7ff';
                    playerElement.textContent = `${player} (You)`;
                } else {
                    playerElement.textContent = player;
                }
                
                playersList.appendChild(playerElement);
            });
        }
        
        // Enter the lottery
        async function enterLottery() {
            try {
                enterLotteryBtn.disabled = true;
                showStatus('Entering lottery...', 'warning');
                
                const tx = await contract.enter({
                    value: ethers.utils.parseEther('0.001')
                });
                
                showStatus('Transaction submitted. Waiting for confirmation...', 'warning');
                
                await tx.wait();
                
                showStatus('Successfully entered the lottery!', 'success');
                await refreshLotteryData();
            } catch (error) {
                console.error('Error entering lottery:', error);
                showStatus('Failed to enter lottery: ' + error.message, 'error');
            } finally {
                enterLotteryBtn.disabled = false;
            }
        }
        
        // Pick winner (admin only)
        async function pickWinner() {
            try {
                pickWinnerBtn.disabled = true;
                showStatus('Picking a winner...', 'warning');
                
                const tx = await contract.pickWinner();
                
                showStatus('Transaction submitted. Waiting for confirmation...', 'warning');
                
                await tx.wait();
                
                showStatus('Winner has been picked! Check the events for details.', 'success');
                await refreshLotteryData();
            } catch (error) {
                console.error('Error picking winner:', error);
                showStatus('Failed to pick winner: ' + error.message, 'error');
            } finally {
                pickWinnerBtn.disabled = false;
            }
        }
        
        // Display status messages
        function showStatus(message, type) {
            statusMessage.innerHTML = `<div class="status ${type}">${message}</div>`;
            
            // Clear success/error messages after 5 seconds
            if (type === 'success' || type === 'error') {
                setTimeout(() => {
                    statusMessage.innerHTML = '';
                }, 5000);
            }
        }
        
        // Setup event listeners for contract events
        function setupEventListeners() {
            contract.on("LotteryEntered", async (player, amount, event) => {
                console.log(`Lottery entered by ${player} with ${ethers.utils.formatEther(amount)} ETH`);
                await refreshLotteryData();
                
                if (player.toLowerCase() !== connectedAddress.toLowerCase()) {
                    showStatus(`New participant: ${player.substring(0, 6)}...${player.substring(38)}`, 'success');
                }
            });
            
            contract.on("WinnerPicked", async (winner, prize, event) => {
                console.log(`Winner picked: ${winner} won ${ethers.utils.formatEther(prize)} ETH`);
                await refreshLotteryData();
                
                if (winner.toLowerCase() === connectedAddress.toLowerCase()) {
                    showStatus(`Congratulations! You won ${ethers.utils.formatEther(prize)} ETH! 🎉`, 'success');
                } else {
                    showStatus(`Winner picked: ${winner.substring(0, 6)}...${winner.substring(38)} won ${ethers.utils.formatEther(prize)} ETH!`, 'warning');
                }
            });
        }
        
        // Setup UI event listeners
        connectWalletBtn.addEventListener('click', connectWallet);
        enterLotteryBtn.addEventListener('click', enterLottery);
        pickWinnerBtn.addEventListener('click', pickWinner);
        
        // Check if MetaMask is already connected
        window.addEventListener('load', async () => {
            if (window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                    if (accounts.length > 0) {
                        // User is already connected, initialize the app
                        await connectWallet();
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        });
    </script>
</body>
</html>
