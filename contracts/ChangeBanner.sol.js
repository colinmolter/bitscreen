var changebannerContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"title","type":"string"}],"name":"defineBanner","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"sentence","type":"string"}],"name":"checkSanity","outputs":[{"name":"cs","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"makeDonation","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBanner","outputs":[{"name":"msg","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"val","type":"string"}],"name":"changeBannerFreely","outputs":[],"payable":false,"type":"function"},{"inputs":[],"type":"constructor"}]);
var changebanner = changebannerContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '606060405260006000600050555b5b61087a8061001c6000396000f360606040526000357c010000000000000000000000000000000000000000000000000000000090048063151de59114610068578063161f68c7146100be57806340ea0a941461012f578063cc1005f514610143578063d634005f146101c357610063565b610002565b6100bc6004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190505061021e565b005b34610002576101176004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610473565b60405180821515815260200191505060405180910390f35b34610002576101416004805050610483565b005b34610002576101556004805050610552565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101b55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b346100025761021c6004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610684565b005b6060604051908101604052806020604051908101604052806000815260200150815260200160008152602001602060405190810160405280600081526020015081526020015061026d82610473565b1561042a5761027a610483565b81816000018190525080600160005060006000600081815054809291906001019190505581526020019081526020016000206000506000820151816000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061030457805160ff1916838001178555610335565b82800160010185558215610335579182015b82811115610334578251826000505591602001919060010190610316565b5b5090506103609190610342565b8082111561035c5760008181506000905550600101610342565b5090565b5050602082015181600101600050556040820151816002016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106103c457805160ff19168380011785556103f5565b828001600101855582156103f5579182015b828111156103f45782518260005055916020019190600101906103d6565b5b5090506104209190610402565b8082111561041c5760008181506000905550600101610402565b5090565b505090505061046e565b3373ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051809050600060405180830381858888f19350505050151561046d57610002565b5b5b5050565b60006001905061047e565b919050565b60006000600060003493507364ed936be8e205d999021cf80a8141b54eb9adc6925073944de8f9211a3870e3579d14931c9e8d90b0834991506002848115610002570490508273ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051809050600060405180830381858888f1935050505015801561054157508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051809050600060405180830381858888f193505050505b1561054b57610002565b5b50505050565b6020604051908101604052806000815260200150600060006000505414156105b957604060405190810160405280600d81526020017f496e697469616c205469746c6500000000000000000000000000000000000000815260200150905061068156610680565b6001600050600060016000600050540381526020019081526020016000206000506000016000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106745780601f1061064957610100808354040283529160200191610674565b820191906000526020600020905b81548152906001019060200180831161065757829003601f168201915b50505050509050610681565b5b90565b6060604051908101604052806020604051908101604052806000815260200150815260200160008152602001602060405190810160405280600081526020015081526020015081816000018190525080600160005060006000600081815054809291906001019190505581526020019081526020016000206000506000820151816000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061075457805160ff1916838001178555610785565b82800160010185558215610785579182015b82811115610784578251826000505591602001919060010190610766565b5b5090506107b09190610792565b808211156107ac5760008181506000905550600101610792565b5090565b5050602082015181600101600050556040820151816002016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061081457805160ff1916838001178555610845565b82800160010185558215610845579182015b82811115610844578251826000505591602001919060010190610826565b5b5090506108709190610852565b8082111561086c5760008181506000905550600101610852565b5090565b50509050505b505056', 
     gas: 4700000
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })