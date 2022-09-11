const abi = require('../abi/SportsClubAccessManager.json')

export default function kaliAccessManager(address, web3) {
  let accessManager = new web3.eth.Contract(abi, address)
  return accessManager
}
