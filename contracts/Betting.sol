pragma solidity ^0.4.18;

import "./github.com/Arachnid/solidity-stringutils/strings.sol";

contract Betting {
    using strings for *;
    uint constant votetypePlace = 1;
    uint constant votetypeQuinella = 2;
    uint constant votetypeExacta = 3;

    uint constant costPerVote = 0.01 ether;

    struct Vote {
        uint votetype;
        uint volume;
        string value;
        address buyer;
    }

    Vote[] public placeVotes;
    Vote[] public quinellaVotes;
    Vote[] public exactaVotes;

    function addPlaceVotes(uint _volume, string _characters) public payable {
        strings.slice memory s = _characters.toSlice();
        strings.slice memory delim = ".".toSlice();
        for (uint i = 0; i < s.count(delim) + 1; i++) {
             string memory character = s.split(delim).toString();
             Vote memory vote = Vote(
                 votetypePlace,
                 _volume,
                 character,
                 msg.sender
             );
             placeVotes.push(vote);
        }
    }
}
