"use strict"

const getAbi = () => [
    {
        "constant": true,
        "inputs": [
            {
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "starsForSale",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "from",
                "type": "address"
            },
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "from",
                "type": "address"
            },
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "from",
                "type": "address"
            },
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "owner",
                "type": "address"
            },
            {
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_story",
                "type": "string"
            },
            {
                "name": "_ra",
                "type": "string"
            },
            {
                "name": "_dec",
                "type": "string"
            },
            {
                "name": "_mag",
                "type": "string"
            },
            {
                "name": "_cent",
                "type": "string"
            },
            {
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "createStar",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "name": "_price",
                "type": "uint256"
            }
        ],
        "name": "putStarUpForSale",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "buyStar",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_ra",
                "type": "string"
            },
            {
                "name": "_dec",
                "type": "string"
            },
            {
                "name": "_mag",
                "type": "string"
            },
            {
                "name": "_cent",
                "type": "string"
            }
        ],
        "name": "checkIfStarExist",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenIdToStarInfo",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

if(typeof web3 != 'undefined') { 
    web3 = new Web3(web3.currentProvider) // what Metamask injected 
} else {
    // Instantiate and set Ganache as your provider
    web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/46a8f1b45bdb43718a05497adbb108c3"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

// The interface definition for your smart contract (the ABI) 
var StarNotary = web3.eth.contract(getAbi());
// Grab the contract at specified deployed address with the interface defined by the ABI
var starNotary = StarNotary.at('0x07a3e16109d63868e86ec04407d9ca96a252ba91');

// Enable claim button being clicked
function claimButtonClicked() {
    const starName = document.getElementById('star-name-input').value;
    const starStory = document.getElementById('star-story-input').value;
    const starRa = document.getElementById('star-ra-input').value;
    const starDec = document.getElementById('star-dec-input').value;
    const starMag = document.getElementById('star-mag-input').value;
    const starCent = document.getElementById('star-cent-input').value;
    const tokenId = document.getElementById('token-id-input').value;
    web3.eth.getAccounts((error, accounts) => {
        starNotary.createStar(starName, starStory, starRa, starDec, starMag, starCent, tokenId, { from: accounts[0] }, (errors) => {

            if (!error) {
                location.reload();
            } else {
                console.log("ERROR", error);
            }
        })
    })
}


function fetchButtonClicked(event) {
    const tokenId = document.getElementById('token-id-input').value;
    const starNamelbl = document.getElementById('star-name-lbl');
    const starStorylbl = document.getElementById('star-story-lbl');
    const starRalbl = document.getElementById('star-ra-lbl');
    const starDeclbl = document.getElementById('star-dec-lbl');
    const starMaglbl = document.getElementById('star-mag-lbl');
    const starCentlbl = document.getElementById('star-cent-lbl');
    web3.eth.getAccounts((error, accounts) => {
        starNotary.tokenIdToStarInfo(tokenId, { from: accounts[0] }, (errors, result) => {
            if (error) {
                console.log("Not found", error);
                return
            }

            starNamelbl.innerText = result[0];
            starStorylbl.innerText = result[1];
            starRalbl.innerText = result[2];
            starDeclbl.innerText = result[3];
            starMaglbl.innerText = result[4];
            starCentlbl.innerText = result[5];
        })
    })
}