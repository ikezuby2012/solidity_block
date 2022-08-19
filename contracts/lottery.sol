pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public player_address;

    function Lottery() public {
        manager = msg.sender;
    }
    function getPlayers() public views returns (address[]) {
        return player_address;
    }
    function enter() public payable {
        require(msg.value > .01 ether);
        player_address.push(msg.address);
    }

    function random() private views returns (uint) {
       return uint(keccak256(block.difficulty, now, player_address)); 
    }

    function pickWinner() public restrictUser {
        uint index = random() % player_address.length;
        player_address[index].transfer(this.balance);
        player_address = new address[](0);
    }

    function forfeitOperation() internal {

    }

    modifier restrictUser() {
        require(msg.sender == manager);
        _;
    }
}