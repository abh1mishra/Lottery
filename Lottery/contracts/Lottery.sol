pragma solidity ^0.4.25;
contract Lottery{
    address public manager;
    address[] public players;
    constructor () public{
        manager=msg.sender;
    }
    function enterLottery() public  payable{
        require(msg.value>0.1 ether);
        players.push(msg.sender);
    }
    function getPlayers() public view returns(address[]){
        return players;
    }
    function random() public view returns(uint){
        return uint(keccak256(abi.encodePacked(block.difficulty,now)))%players.length;
    }
    function pickwinner() payable public{
        require(msg.sender==manager);
        players[0].transfer(100000000000000000);
    }
    function getBalance() public view returns(uint){
        return address(this).balance;
    }
    
}