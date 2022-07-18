import React from 'react'
import Image from 'next/image'
import { styled } from '../../styles/stitches.config'
import { useRouter } from 'next/router'

const LogoContainer = styled('div', {
  padding: '8.11px 7.9px 8.6px 0.92px',
  filter: 'grayscale(100%)',
})

export default function Kali() {
  const router = useRouter()

  const home = () => {
    router.push('/')
  }

  return (
    <LogoContainer>
      <Image src="/icons/K-logo.svg" alt="KALI" width="59.79px" height="59.79px" onClick={home} priority />
    </LogoContainer>
  )
}
