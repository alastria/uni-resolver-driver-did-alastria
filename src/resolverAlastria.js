const Web3 = require("web3")
const {transactionFactory} = require("alastria-identity-lib")


class Resolver {
    
    static resolver(did){
        var splitDID = did.split(":");
        if (splitDID[4].length == 40){
            const proxyAddress = splitDID[4];
            const netId = this.web3provider(splitDID[3].toString());
            const web3 = new Web3(new Web3.providers.HttpProvider(netId))
            const network = splitDID[2];
            
            try{
                return transactionFactory.publicKeyRegistry.getCurrentPublicKey(web3,did);    
                
                
            } catch{
                throw new Error("Unable to connect to AlatriaID smart contract at " + proxyAddress);
            }               

        } else{
            throw new Error("DID string does not contain a valid smart contract script hash");
        }
    }


    static web3provider(netId){
        let blockchainServiceIp;
        switch(netId.toLowerCase()){
            case 'redt':
                blockchainServiceIp = "http://63.33.206.111/rpc"
            case 'redb':
                blockchainServiceIp = "http://63.33.206.111:8545"
        }
        return blockchainServiceIp
    }

    static generateDIDDocument(_id, _pk, _date){
        let document = {
            context: "https://w3id.org/did/v1",
            id: _id + "#keys-1",
            publicKey: [{
                    id: _id,
                    type: ["CryptographicKey", "EcdsaKoblitzPublicKey"],
                    curve: "secp256k1",
                    expires: _date,
                    publicKeyHexData: _pk
                }]

        }
       
        return(document)
    }
}

module.exports = {
    Resolver: Resolver
}