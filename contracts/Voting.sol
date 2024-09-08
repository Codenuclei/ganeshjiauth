pragma solidity ^0.8.21;

contract Voting {
    mapping(address => bool) public voters;
    mapping(uint => uint) public votes;
    bool public votingActive;
    address public owner;

    constructor() {
        owner = msg.sender;
        votingActive = true;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    function registerVoter(address _voter) public onlyOwner {
        voters[_voter] = true;
    }

    function vote(uint _candidateId) public {
        require(voters[msg.sender], "Not a registered voter");
        require(votingActive, "Voting is not active");
        votes[_candidateId]++;
    }

    function endVoting() public onlyOwner {
        votingActive = false;
    }

    function getResults(uint _candidateId) public view returns (uint) {
        return votes[_candidateId];
    }

    function getVotingStatus() public view returns (bool) {
        return votingActive;
    }
}
