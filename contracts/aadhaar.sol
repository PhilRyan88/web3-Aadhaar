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
    function Enter( uint256 _id, string memory _name, uint256 _age, string memory _gender, string memory _state,string memory _district)public {
        Details[_id] = Detail(_name,_age,_gender,_state,_district);




    }
    function Get(uint256 _id, string memory _name, uint256 _age, string memory _gender, string memory _state,string memory _district)public view returns {
        Detail storage detail = Details[_id];
        return (detail.name, detail.age, detail.gender, detail.state, detail.district);

    }

}