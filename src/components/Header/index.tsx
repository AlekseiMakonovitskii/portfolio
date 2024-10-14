import { Button, ButtonDark, Container } from '../../coreComponents';
import React, { useMemo, useState } from 'react'
import style from './Header.module.scss';
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinkStyles = useMemo(() => {
    const styles = {
      home: '',
      projects: '',
      experience: '',
    };
    const { pathname } = location;
    if (pathname === '/') styles.home = style.nav_active_link;
    if (pathname === '/projects') styles.projects = style.nav_active_link;
    if (pathname === '/experience') styles.experience = style.nav_active_link;

    return styles;
  }, [location]);  

  return (
    <header className={style.header}>
      <Container>
        <div className={style.header_content}>
          <Link to='/' className={style.logo}>{'{AM}'}</Link>
          <nav className={`${style.nav} ${isOpen ?style.nav_open : ''}`}>
            <div className={style.nav_header}>
              <Button className={style.nav_header_close_btn} variant='link' onClick={() => setIsOpen(false)}><AiOutlineClose size={30}/></Button>
            </div>
            <div className={style.nav_content}>
              <Link to='/' className={navLinkStyles.home}>Home</Link>
              <Link to='/projects' className={navLinkStyles.projects}>Projects</Link>
              <Link to='/experience' className={navLinkStyles.experience}>Experience</Link>
              <ButtonDark>Download CV</ButtonDark>
            </div>
          </nav>
          <Button className={style.header_menu_btn} onClick={() => setIsOpen(true)}><FaBars size={30}/></Button>
        </div>
      </Container>
    </header>
  )
}

export default React.memo(Header);
