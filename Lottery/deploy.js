const assert = require("assert");
const truffleProvider=require("truffle-hdwallet-provider");
const provider= new truffleProvider("toss symptom rural lamp envelope rifle resemble liberty trip connect current advice","https://rinkeby.infura.io/v3/993d49004d4a49c38b1cd46159d60d4f")
const Web3=require("web3");
const web3=new Web3(provider);
const {bytecode,interface}= require("./compile");
let account;
let lottery;
async function deployContract(){
account=await web3.eth.getAccounts();
console.log("account is "+account[0]);
lottery= await new web3.eth.Contract(JSON.parse(interface)).
deploy({data:bytecode}).
send({from:account[0],gas:"3000000"});
console.log("Lottery address is "+lottery.options.address);
}
deployContract();
// console.log(    deployContract().then((lottery)=>{lottery.options.address}) );