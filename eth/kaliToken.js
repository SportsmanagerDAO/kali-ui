const abi = require('../abi/SportsClubERC20factory.json')

export default function kaliToken(address, web3) {
  let kaliToken = new web3.eth.Contract(abi, address)
  return kaliToken
}
