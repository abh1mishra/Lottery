const path = require('path');
const fs=require('fs');
const solc=require('solc');
const contractpath=path.resolve(__dirname,'contracts','Lottery.sol');
const sourcefile= fs.readFileSync(contractpath,'utf8');
module.exports=solc.compile(sourcefile,1).contracts[":Lottery"];