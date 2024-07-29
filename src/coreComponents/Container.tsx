import React from 'react'
import { Container as ContainerUI } from '@chakra-ui/react'

interface ContainerProps {
  children: React.ReactNode
}

function Container(props: ContainerProps) {
  const { children } = props;
  return (
    <ContainerUI maxW={1400}>{children}</ContainerUI>
  )
}

export default React.memo(Container);
