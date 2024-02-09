const HelloWord = artifacts.require('HelloWord')

module.exports = async function(_deployer) {
  await _deployer.deploy(HelloWord)
  // Use deployer to state migration tasks.
};
