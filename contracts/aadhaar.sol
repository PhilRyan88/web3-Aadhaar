pragma solidity ^0.8.19;  
contract Aadhar{
    struct Detail{
       
        string name;
        uint256 age;
        string gender;

        string state;
        string district;

    }
    mapping(address=>Detail) public Details;
   function enter(string memory _name, uint256 _age, string memory _gender, string memory _state, string memory _district) public {
        address _id = msg.sender;
        Details[_id] = Detail(_name, _age, _gender, _state, _district);
    }
    function Get(address _id) public view returns (string memory, uint256, string memory, string memory, string memory) {
        Detail storage detail = Details[_id]; //used storage type, mapped the Detail using storage type and a variable is declared 
        return (detail.name, detail.age, detail.gender, detail.state, detail.district);

    }

}