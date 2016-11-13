// Web3js
var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

var abi = [{
	"constant": false,
	"inputs": [{
		"name": "title",
		"type": "string"
	}],
	"name": "defineBanner",
	"outputs": [],
	"payable": true,
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "sentence",
		"type": "string"
	}],
	"name": "checkSanity",
	"outputs": [{
		"name": "cs",
		"type": "bool"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": false,
	"inputs": [],
	"name": "makeDonation",
	"outputs": [],
	"payable": false,
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "getCurrentBanner",
	"outputs": [{
		"name": "msg",
		"type": "string"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "val",
		"type": "string"
	}],
	"name": "changeBannerFreely",
	"outputs": [],
	"payable": false,
	"type": "function"
}, {
	"inputs": [],
	"type": "constructor"
}]

var ChangeBannerContract = web3.eth.contract(abi);
var changeBannerInstance = ChangeBannerContract.at("0x94b4b6bcc42de813f371d9ba9bb63f18bd05b847");


// IOT interaction
var humidityPrec = 30;
var temperaturePrec = 30;


window.onload = function() {


			
};




