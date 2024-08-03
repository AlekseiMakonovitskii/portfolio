import React from 'react'
import Container from '../../coreComponents/Container'
import { Box, Flex } from '../../coreComponents'
import SocialLinks from '../SocialLinks'

function Footer() {
  return (
    <Container>
      <Box pt={3} pb={3}>
        <Flex justifyContent='end'>
          <SocialLinks />
        </Flex>
      </Box>
    </Container>
  )
}

export default React.memo(Footer);

