import React, { useCallback, useState } from 'react';
import { NavButton } from '../../types';
import { Button, ButtonGroup } from '../../coreComponents';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import styles from './Nav.module.css';

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

interface NavProps {
  closeMobileNav?: () => void
}

function Nav(props: NavProps) {
  const { closeMobileNav } = props;
  const [navButtons, setNavButtons] = useState<NavButton[]>(DEFAULT_BUTTONS);
  
  const setActiveButton = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const href = e.currentTarget.getAttribute('href');
    const buttons = navButtons.map((button) => {
      button.colorScheme = 'gray';
      button.variant = 'ghost';

      if (button.to === href) {
        button.colorScheme = 'blue';
        button.variant = 'solid';
      }

      return button;
    })

    setNavButtons(buttons);
    if (closeMobileNav) closeMobileNav();
  }, [navButtons, closeMobileNav]);

  return (
    <ButtonGroup className={styles.mobileNav} spacing={0}>
    {navButtons.map((button) => (
      <Link to={button.to} onClick={setActiveButton} key={button.to}>
        <Button colorScheme={button.colorScheme} variant={button.variant}>      
          {t(button.text)}
        </Button>
      </Link>
    ))}
  </ButtonGroup>
  )
}

export default React.memo(Nav);
