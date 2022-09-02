const abi = require('../abi/SportsClubERC20factory.json')

export default function sportsClubToken(address, web3) {
  let sportsClubToken = new web3.eth.Contract(abi, address)
  return sportsClubToken
}
