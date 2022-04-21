const express = require("express")
const {Resolver} = require("./resolverAlastria")
const {transactionFactory} = require("alastria-identity-lib")
const Web3 = require("web3")
const app = express();

app.get('/1.0/identifiers/:did',function(req,res){
   const web3 = new Web3(new Web3.providers.HttpProvider("http://63.33.206.111/rpc"))
   const did = req.params.did
   const cpk = Resolver.resolver(did);
   
   const getDIDDocument = async() => {
      const pk = await web3.eth.call(cpk)
      pkHex = web3.utils.hexToAscii(pk).replace(/[^0-9A-Z]+/gi, '')
      const pKAsByte32 = `0x${web3.utils.sha3(pkHex)}`
      const pkStatus = await transactionFactory.publicKeyRegistry.getPublicKeyStatusDecodedAsJSON(web3,did,pKAsByte32)
      
      let date;

      if(pkStatus.endDate == 0){
         date = 'Not Expired yet'
      }else{
         date = new Date(pk.pkStatus.endDate)
      }
      const document = Resolver.generateDIDDocument(did, pkHex, date)
      res.send(document)
   }
   
   getDIDDocument()

});

app.listen(8080, () => {
    console.log("Server working in 8080 port");
});