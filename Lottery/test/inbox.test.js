const assert = require("assert");
const ganache= require("ganache-cli");
const Web3=require("web3");
const web3=new Web3(ganache.provider());
const {bytecode,interface}= require("../compile");
let accounts;
let lottery;
//changes
beforeEach(async()=>{
    if(!lottery){
    accounts=await web3.eth.getAccounts();
    lottery= await new web3.eth.Contract(JSON.parse(interface)).deploy({data:bytecode}).send({from:accounts[0],gas:"1000000"});}})
describe("Test the manager",()=>{

    it("test manager",async()=>{
        assert.ok(await lottery.methods.enterLottery().send({value:web3.utils.toWei("0.2","ether"),from:accounts[0]}));
        assert.equal(await lottery.methods.getPlayers().call(),accounts[0]);
        console.log("1:"+lottery.options.address)
    })
    it("test balance",async()=>{
        const balance=await lottery.methods.getBalance().call();
        console.log("2:"+lottery.options.address);
    })
})
