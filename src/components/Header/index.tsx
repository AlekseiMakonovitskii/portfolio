import { Button, ButtonDark, Container } from '../../coreComponents';
import React, { useState } from 'react'
import style from './Header.module.scss';
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={style.header}>
      <Container>
        <div className={style.header_content}>
          <div className={style.logo}>
            {'{AM}'}
          </div>
          <nav className={`${style.nav} ${isOpen ?style.nav_open : ''}`}>
            <div className={style.nav_header}>
              <Button className={style.nav_header_close_btn} variant='link' onClick={() => setIsOpen(false)}><AiOutlineClose size={30}/></Button>
            </div>
            <div className={style.nav_content}>
              <a href="">Home</a>
              <a href="">Projects</a>
              <a href="">Experience</a>
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
