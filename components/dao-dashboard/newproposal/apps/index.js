import React from 'react'
import { Menu } from '../../../../styles/proposal/Menu'
import { Flex, Text } from '../../../../styles/elements'
import { FcSalesPerformance } from 'react-icons/fc'
import { MdOutlineRedeem, MdOutlineConstruction } from 'react-icons/md'
// menu items
import SetCrowdsale from './SetCrowdsale'
import SetRedemption from './SetRedemption'
import Tribute from './Tribute'
import Back from '../../../../styles/proposal/Back'

function AppsMenu({ setProposal }) {
  return (
    <Flex gap="md" dir="col">
      <Text> </Text>
      <Text variant="instruction">(1) Contribute :</Text>
      <Text variant="instruction">
        SportsClubDAOs may swap their SportsClubDAO tokens for ETH or ERC20 tokens publicly or privately.
      </Text>
      <Text variant="instruction">(2) Redemption :</Text>
      <Text variant="instruction">
        SportsClubDAO members may redeem a portion of SportsClubDAO treasury by burning their SportsClubDAO tokens.
      </Text>
      <Menu>
        <Menu.Item onClick={() => setProposal('crowdsale')}>
          <MdOutlineConstruction />
          Contribute
        </Menu.Item>
        <Menu.Item onClick={() => setProposal('redemption')}>
          <MdOutlineRedeem />
          Redemption
        </Menu.Item>
        {/* <Menu.Item onClick={() => setProposal('crowdsaleWithVesting')}>Crowdsale with Vesting</Menu.Item> */}
        {/* <Menu.Item onClick={() => setProposal('tributeWithVesting')}>Tribute with Vesting</Menu.Item> */}
      </Menu>
      <Back onClick={() => setProposal('menu')} />
    </Flex>
  )
}

export { AppsMenu, SetCrowdsale, SetRedemption, Tribute }
