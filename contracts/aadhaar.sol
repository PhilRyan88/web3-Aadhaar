pragma solidity ^0.8.19;  
contract Aadhar{
    struct Detail{
       
        string name;
        uint256 age;
        string gender;

        string state;
        string district;

    }
    mapping(uint256=>Detail) public Details;
    function Enter(uint256 _id, string memory _name, string memory _aadr )public view{



    }

}