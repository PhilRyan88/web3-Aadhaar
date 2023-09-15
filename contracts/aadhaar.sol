pragma solidity ^0.8.19;  
contract Aadhar{
    struct Detail{
        uint256 id;
        string name;
        string addr;

    }
    mapping(uint256=>Detail) public Details;
    function Enter()

}