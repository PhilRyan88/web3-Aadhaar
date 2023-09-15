pragma solidity ^0.8.19;  
contract Aadhar{
    struct Detail{
        uint256 id;
        string name;
        string addr;

    }
    mapping(uint256=>Detail) public Details;
    function Enter(uint256 _id, string memory _name, string memory _aadr )public view{

    }

}