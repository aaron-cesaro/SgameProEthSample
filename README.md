# Sgame Pro test

Sample test with ethereum network. The app creates a player defining name, game played and game's score.
It uses testrpc network instead of real ethereum network, but the net is really well simulated.

### Prerequisites

- node
- npm
- testrpc (test net to simulate full client behaviour)
- web3.js
- remix IDE

### Installing

- install node.js
- install npm
```
npm install -g ethereumjs-testrpc
```
Using the terminal go to SgameProEthSample folder and type:
    ```
    testrpc
    ```

Then open a new terminal and type:
    ```
    npm init
    ```

Lastly type type:
    ```
    npm install ethereum/web3.js --save
    ```

Now go to http://remix.ethereum.org
- Create new file (top left corner)
- Paste SgamePro.sol content
- Select in run tab (top-right) => enviroment => Web3 Provider
- Click create button (the pink one)
- Copy the SgamePro contract address (it's in the pannel just created)
- Paste the address into the script.js file, line 86

Ok that's it. Open the index.html file and start using it.

This is only a simplified simulation. If you want something more "pro" please let me know,
I have more realistic examples but the web app demonstrates the ethereum integration into
a web page using web3.js library.
