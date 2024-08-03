import React, { useCallback, useEffect, useState } from 'react'
import Container from '../../coreComponents/Container'
import { Button, Flex, Heading, Box, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, HamburgerIcon } from '../../coreComponents'
import breakpoints from '../../styles/breakpoints'
import { useMediaQuery } from '@chakra-ui/react'
import { t } from 'i18next'
import Nav from '../Nav'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.md_sm})`)


  const toggleNavOpen = useCallback(() => setIsNavOpen((prev) => !prev), []);

  useEffect(() => {
    setIsNavOpen(false);
  }, [isMobile])

  return (
    <Container>
      <Box pt={50} pb={50}>
        <Flex justify='space-between' align='center'>
          <Heading size='lg'>{t`Aleksei Makonovitskii`}</Heading>
         {isMobile ? <Button onClick={toggleNavOpen} variant='ghost'><HamburgerIcon boxSize={7}/></Button> : <Nav />}
        </Flex>
      </Box>

     {isMobile && (
      <Drawer isOpen={isNavOpen} onClose={toggleNavOpen} size='full'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton/>
          </DrawerHeader>
          <DrawerBody>
            <Nav closeMobileNav={toggleNavOpen}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )}
    </Container>
  )
}

export default React.memo(Header);
