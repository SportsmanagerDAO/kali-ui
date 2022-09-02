const abi = require('../abi/SportsClubNFT.json')

export default function kaliNFT(address, web3) {
  let kaliNFT = new web3.eth.Contract(abi, address)
  return kaliNFT
}
