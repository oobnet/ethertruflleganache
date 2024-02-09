// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWord {

  string public oob;

  constructor() {
    oob = "odair lindao";
  }

  function getHello() public view returns (string memory){
    return oob;
  }
}
