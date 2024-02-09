const HelloWord = artifacts.require("HelloWord");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("HelloWord", function (/* accounts */) {

  const oob = 'odair lindao';
  
  before(async function() {
    this.contract = await HelloWord.deployed()
  })

  // it("should assert true", async function () {
  //   await HelloWord.deployed();
  //   return assert.isTrue(true);
  // });


  

  it("function getHello is odair lindao", async function () {
    const resp =  await  this.contract.getHello();
    return assert.equal(oob,resp);
  });

});
