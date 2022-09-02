import { ethers } from 'ethers'
import SPORTSCLUBDAO_ABI from '../abi/SportsClubDAO.json'

export async function fetchExtensionStatus(chainId, daoAddress, extensionAddress) {
  if (!chainId || !daoAddress) return

  console.log(chainId, daoAddress)
  try {
    const provider = new ethers.providers.InfuraProvider(parseInt(chainId), process.env.NEXT_PUBLIC_INFURA_ID)
    const contract = new ethers.Contract(daoAddress, SPORTSCLUBDAO_ABI, provider)
    const status = await contract.extensions(extensionAddress)

    if (status) return status
    else return false
  } catch (e) {
    console.log(e)
  }
}
