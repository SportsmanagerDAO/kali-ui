import { ethers } from 'ethers'
import SPORTSCLUBDAO_ABI from '../abi/SportsClubDAO.json'

export async function fetchDocs(chainId, daoAddress) {
  if (!chainId || !daoAddress) return

  console.log(chainId, daoAddress)
  try {
    const provider = new ethers.providers.InfuraProvider(parseInt(chainId), process.env.NEXT_PUBLIC_INFURA_ID)
    const contract = new ethers.Contract(daoAddress, SPORTSCLUBDAO_ABI, provider)
    const docs = await contract.docs()
    if (docs) return docs
    else return false
  } catch (e) {
    console.log(e)
  }
}
