import React, { useMemo } from 'react'
import { Flex, Text } from '../../../../styles/elements'
import { ProposalCard } from './ProposalCard'

export default function Proposals({ proposals }) {
  // filtering out cancelled proposals
  const memoizedProposals = useMemo(
    () => proposals.sort((a, b) => b.serial - a.serial).filter((p) => !(p.cancelled == true)),
    [proposals],
  )

  return (
    <Flex dir="col" gap="md">
      <Text
        color="foreground"
        variant="heading"
        css={{
          fontFamily: 'Regular',
        }}
      >
        Proposals
      </Text>
      <Flex dir="col">
        {memoizedProposals.length > 0
          ? memoizedProposals.map((proposal) => <ProposalCard key={proposal['id']} proposal={proposal} />)
          : 'No proposals. Make one by clicking the + icon.'}
      </Flex>
    </Flex>
  )
}
