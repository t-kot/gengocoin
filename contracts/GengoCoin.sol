pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract GengoCoin is StandardToken, Ownable {
    string public name = "GengoCoin";
    string public symbol = "GNG";
    uint public decimals = 2;

    function setSymbol(string newSymbol) public onlyOwner {
        symbol = newSymbol;
    }

    function setName(string newName) public onlyOwner {
        name = newName;
    }
}
