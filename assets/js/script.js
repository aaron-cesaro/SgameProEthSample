/**
 * All necessary code to access ethereum's network is defined in this file.
 * After 
 */

$(document).ready(function() {
    if (typeof web3 !== 'undefined') {
    //is already defined, so use the current provider
        web3 = new Web3(web3.currentProvider);
    } else {    //initialize with localhost:8545, that is testrpc default address
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
    //using the first of 10 accounts provided by testrpc
    web3.eth.defaultAccount = web3.eth.accounts[0];
    
    //initialising and create the smart contract from ABI
    var SgameProContract = web3.eth.contract([
        {
            "constant": true,
            "inputs": [],
            "name": "getPlayer",
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
                    "type": "uint256"
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
                    "indexed": false,
                    "name": "name",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "game",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "score",
                    "type": "uint256"
                }
            ],
            "name": "Player",
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
                    "name": "_game",
                    "type": "string"
                },
                {
                    "name": "_score",
                    "type": "uint256"
                }
            ],
            "name": "setPlayer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]);
    //defining contract address
    var SgamePro = SgameProContract.at("PASTE THE ADDRESS HERE");
    //make sure to access the contract ABI
    console.log(SgamePro);
    //retrieving player's infos
    //In contract's getPlayer() are returned 3 values.
    SgamePro.getPlayer(function(error, result) {
        if(!error) {
            //The player's name is the first one
            $("#player-name").html("Player: " + result[0]);
            //Game played is the second one
            $("#game-played").html("\nGame: " + result[1]);
            //and player's score is the third one
            $("#player-score").html("\nScore: " + result[2]);
        } else { //an error occurred
            console.log(error);
        }
    });

    var playerEvent = SgamePro.Player();
    playerEvent.watch(function (error, result) { 
        $("#loader").hide();
        if(!error) {
            $("#player-name").text("Player: " + result.args.name);
            $("#game-played").text("Game: " + result.args.game);
            $("#player-score").text("Score: " + result.args.score);
        }
    });

    //When the button is clicked a new player will be created
    $("#button").click(function() {
        $("#loader").show();
        SgamePro.setPlayer($("#name").val(), $("#game").val(), $("#score").val());
        console.log("Player created")
    });
});