import React, { useState } from 'react'
import Container from '../../coreComponents/Container'
import { Button, ButtonGroup, Flex, Heading, Box } from '../../coreComponents'
import { Link } from 'react-router-dom'
import { NavButton } from '../../types'
import { useTranslation } from 'react-i18next'

const DEFAULT_BUTTONS = [
  {
    to: '/',
    text: 'home',
    colorScheme: 'blue',
    variant: 'solid',
  },
  {
    to: '/experience',
    text: 'experience',
    colorScheme: 'gray',
    variant: 'ghost',
  },
  {
    to: '/projects',
    text: 'projects',
    colorScheme: 'gray',
    variant: 'ghost',
  }
]

function Header() {
  const [navButtons, setNavButtons] = useState<NavButton[]>(DEFAULT_BUTTONS);
  const { t } = useTranslation();

  const setActiveButton = (e: React.MouseEvent<HTMLElement>) => {
    const href = e.currentTarget.getAttribute('href');
    const buttons = navButtons.map((button) => {
      const newButton = button;
      newButton.colorScheme = 'gray';
      newButton.variant = 'ghost';

      if (newButton.to === href) {
        newButton.colorScheme = 'blue';
        newButton.variant = 'solid';
      }

      return newButton;
    })

    setNavButtons(buttons);
  };


  return (
    <Container>
      <Box pt={3} pb={3}>
        <Flex justify='space-between' align='center'>
          <Heading size='lg'>{t`Aleksei Makonovitskii`}</Heading>
          <ButtonGroup>
            {navButtons.map((button) => (
              <Link to={button.to} onClick={setActiveButton} key={button.to}>
                <Button colorScheme={button.colorScheme} variant={button.variant}>      {t(button.text)}
                </Button>
              </Link>
            ))}
          </ButtonGroup>
        </Flex>
      </Box>
    </Container>
  )
}

export default React.memo(Header);
