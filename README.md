# bitscreen

testing smart contracts on simple website actions

# Install all the blocks

## Install and start with GETH
For the development phase you need to install GETH https://github.com/ethereum/go-ethereum/wiki/geth. geth is the the command line interface for running a full ethereum node. After installation, 

1. you have to launch the server
```
geth 
  --networkid "3131"  
  --datadir "/path/to/blockchain/dir" 
  --ipcpath "/Users/colin/.ethereum/geth.ipc" 
  --rpc 
  --rpccorsdomain "http://localhost:8080" 
  --rpcapi eth,web3,personal
```

I had to specify these options (for reference: https://github.com/ethereum/go-ethereum/wiki/Command-Line-Options) to enable the app to zork.
*  --networkid value:  Network identifier (integer, 0=Olympic, 1=Frontier, 2=Morden) (default: 1). That prevents to connect to the global network
* --datadir "/home/XX/.ethereum"  Data directory for the databases and keystore
* --ipcpath "/path/to/geth.ipc"  Filename for IPC socket/pipe within the datadir
* --rpc --> to enable the HTTP-RPC server
* --rpccorsdomain value Comma separated list of domains from which to accept cross origin requests (browser enforced)
* --rpcapi eth,web3,personal: personal is added to enable the unlocking of accounts

Once the server is launched, it specifies an IPC address to connect to it. Here: /p  ath/to/geth.ipc

2. you can launch a javascript console and test that it works
```
geth attach ipc:/Users/colin/.ethereum/geth.ipc
```
In the console you can then start a miner. This is mandatory for all subsequent actions, like doing a transactionm etc. (the transaction to be accepted has to be mined inside a blockchain). To start/stop mining, just type in the java console:
```
 miner.start(1)
 miner.stop()
```
you have to start creating accounts (if not already created). Then you can play with transactions. To perform a transaction, you have to unlock the account (and the miner has to be started).
```
personal.unlockAccount(eth.accounts[0], "name");
for(i=0;i<eth.accounts.length;++i){console.log(eth.getBalance(eth.accounts[i]));}
eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[2], value: web3.toWei(1, "ether")})
```


loading a smart contract using loadscript:
```
loadScript("ethereumStarterKit/smartContracts/test.js")
```
--> it will be loaded in the server (miner has to be started) and will acquire an address. That address can be used later to reference that smart contract.
