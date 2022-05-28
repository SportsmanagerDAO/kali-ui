import React from 'react'
import { useRouter } from 'next/router';
import { Flex, Text } from '../../../styles/elements'
import { ProposalCard } from './ProposalCard'
import { getDaoChain } from '../../../utils';
import { DAO_PROPOSALS } from '../../../graph/';
import { useQuery } from '@apollo/client';

export default function Proposals() {
  const router = useRouter();
  const daoAddress = router.query.dao
  const daoChain = getDaoChain(daoAddress)
  const { loading, error, data } = useQuery(DAO_PROPOSALS, {
    variables: { dao: daoAddress },
    // client: new ApolloClient({
    //   uri: GRAPH_URL[daoChain],
    //   cache: new InMemoryCache()
    // })
  });

  const proposals = data ? data["daos"][0]["proposals"] : null
  console.log(proposals)
  
  // TODO:
  // - Binding proposals
  // - Non-binding proposals
  
  return (
    <Flex dir="col" gap="md">
      <Text color="foreground" variant="heading">Proposals</Text>
      <Flex dir="col">
      {proposals && (proposals.length > 1 ?
      proposals.map(proposal => 
        <ProposalCard key={proposal["id"]} proposal={proposal} />
      ) : 'No proposals. Make one by clicking the + icon.')}
      </Flex>
    </Flex>
  )
}
