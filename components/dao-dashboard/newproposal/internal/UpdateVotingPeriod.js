import React, { useState } from 'react'
import { useContract, useSigner, useContractRead } from 'wagmi'
import { Flex, Text, Button, Warning } from '../../../../styles/elements'
import { Form, FormElement, Label, Input } from '../../../../styles/form-elements'
import { Select } from '../../../../styles/form-elements/Select'
import FileUploader from '../../../tools/FileUpload'
import KALIDAO_ABI from '../../../../abi/KaliDAO.json'
import { useRouter } from 'next/router'
import { uploadIpfs } from '../../../tools/ipfsHelpers'
import { AddressZero } from '@ethersproject/constants'
import { votingPeriodToSeconds, formatVotingPeriod } from '../../../../utils'
import Spinner from '../../../elements/Spinner'
import Back from '../../../../styles/proposal/Back'

export default function UpdateVotingPeriod({ setView }) {
  const router = useRouter()
  const daoAddress = router.query.dao
  const { data: signer } = useSigner()
  const kalidao = useContract({
    addressOrName: daoAddress,
    contractInterface: KALIDAO_ABI,
    signerOrProvider: signer,
  })
  const { data: votingPeriod, isWaitingVotingPeriod } = useContractRead(
    {
      addressOrName: daoAddress,
      contractInterface: KALIDAO_ABI,
    },
    'votingPeriod',
    {
      chainId: Number(router.query.chainId),
    },
  )

  // form
  const [unit, setUnit] = useState('min')
  const [duration, setDuration] = useState(null)
  const [warning, setWarning] = useState(null)
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)

  // TODO: Popup to change network if on different network from DAO
  const submit = async (e) => {
    e.preventDefault()

    const seconds = votingPeriodToSeconds(duration, unit)

    let docs
    if (file) {
      docs = await uploadIpfs(daoAddress, 'Voting Period Proposal', file)
    } else {
      docs = description
    }

    // console.log('Proposal Params - ', 2, docs, [AddressZero], [seconds], [Array(0)])
    if (seconds) {
      try {
        const tx = await kalidao.propose(
          3, // VPERIOD prop
          docs,
          [AddressZero],
          [seconds],
          [Array(0)],
        )
        console.log('tx', tx)
      } catch (e) {
        console.log('error', e)
      }
    } else {
      setWarning('Please set a duration.')
    }
  }

  return (
    <Flex
      dir="col"
      gap="md"
      css={{
        padding: '20px',
        width: '60vw',
        fontFamily: 'Regular',
      }}
    >
      <Back onClick={() => setView(0)} />
      <Text>Update proposal voting period</Text>
      <Form>
        <FormElement>
          <Label htmlFor="recipient">Current Voting Period</Label>
          <Text>{isWaitingVotingPeriod ? <Spinner /> : formatVotingPeriod(votingPeriod)}</Text>
        </FormElement>
        <FormElement>
          <Label htmlFor="recipient">Duration</Label>
          <Input
            name="recipient"
            type="number"
            min="0"
            placeholder="30"
            defaultValue={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </FormElement>
        <FormElement>
          <Label htmlFor="type">Unit</Label>
          <Select name="type" onValueChange={(value) => setUnit(value)} defaultValue={unit}>
            <Select.Item value="min">minute</Select.Item>
            <Select.Item value="hour">hour</Select.Item>
            <Select.Item value="day">day</Select.Item>
          </Select>
        </FormElement>
        {warning && <Warning warning={warning} />}
        <Button onClick={submit}>Submit</Button>
      </Form>
    </Flex>
  )
}
